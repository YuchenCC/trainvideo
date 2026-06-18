import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const API_URL = "https://api.minimaxi.com/v1/t2a_v2";
const DEFAULT_VOICE_ID = "moss_audio_ce44fc67-7ce3-11f0-8de5-96e35d26fb85";
const PROJECT_ROOT = process.cwd();
const SCRIPT_PATH = path.join(PROJECT_ROOT, "口播稿.md");
const OUTPUT_DIR = path.join(PROJECT_ROOT, "assets/media/audio/voiceover");
const RATE_LIMIT_WAIT_MS = 65_000;
const MAX_ATTEMPTS = 3;
const DEFAULT_SPEED = 1.15;
const CHAPTER_OUTPUT_FILES = {
  "11": "chapter-11-voiceover-v2.mp3"
};
const CHAPTER_SPEEDS = {
  "07": 1.22,
  "10": 1.15,
  "11": 1.15
};

const CHAPTERS = [
  { chapter: "01", start: 0, duration: 28 },
  { chapter: "02", start: 28, duration: 28 },
  { chapter: "03", start: 56, duration: 21 },
  { chapter: "04", start: 77, duration: 25 },
  { chapter: "05", start: 102, duration: 23 },
  { chapter: "06", start: 125, duration: 26 },
  { chapter: "07", start: 151, duration: 20 },
  { chapter: "08", start: 171, duration: 30 },
  { chapter: "09", start: 201, duration: 19 },
  { chapter: "10", start: 220, duration: 43 },
  { chapter: "11", start: 263, duration: 18 }
];

function parseEnv(content) {
  const env = {};
  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;

    const equalsIndex = line.indexOf("=");
    if (equalsIndex === -1) continue;

    const key = line.slice(0, equalsIndex).trim();
    let value = line.slice(equalsIndex + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    env[key] = value;
  }
  return env;
}

async function loadApiKey() {
  if (process.env.MINIMAX_API_KEY) return process.env.MINIMAX_API_KEY;

  try {
    const envContent = await readFile(path.join(PROJECT_ROOT, ".env"), "utf8");
    return parseEnv(envContent).MINIMAX_API_KEY;
  } catch {
    return undefined;
  }
}

function splitMarkdownTableRow(line) {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function parseVoiceoverMarkdown(content) {
  const chapterRows = new Map(CHAPTERS.map(({ chapter }) => [chapter, []]));

  for (const line of content.split(/\r?\n/)) {
    if (!line.startsWith("|")) continue;
    if (/^\|\s*-+/.test(line)) continue;
    if (line.includes("| 分镜 |")) continue;

    const cells = splitMarkdownTableRow(line);
    if (cells.length < 3) continue;

    const scene = cells[0];
    const text = cells[2];
    const match = scene.match(/Scene\s+(\d{2})/i);
    if (!match || !text) continue;

    const chapter = match[1];
    if (!chapterRows.has(chapter)) continue;
    chapterRows.get(chapter).push(text);
  }

  const missing = [...chapterRows.entries()]
    .filter(([, rows]) => rows.length === 0)
    .map(([chapter]) => chapter);

  if (missing.length > 0) {
    throw new Error(`Missing voiceover rows for chapter(s): ${missing.join(", ")}`);
  }

  return CHAPTERS.map((chapterInfo) => ({
    ...chapterInfo,
    text: chapterRows.get(chapterInfo.chapter).join("\n")
  }));
}

function audioHexFromResponse(json) {
  const statusCode = json?.base_resp?.status_code;
  if (statusCode !== 0) {
    const statusMsg = json?.base_resp?.status_msg || "unknown MiniMax error";
    const error = new Error(`MiniMax status ${statusCode}: ${statusMsg}; trace_id=${json?.trace_id || "n/a"}`);
    error.statusCode = statusCode;
    throw error;
  }

  const audio = json?.data?.audio;
  if (!audio || typeof audio !== "string") {
    throw new Error(`MiniMax response did not include audio hex; trace_id=${json?.trace_id || "n/a"}`);
  }
  return audio;
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function generateChapterAudio(apiKey, chapter) {
  const payload = {
    model: "speech-2.8-hd",
    text: chapter.text,
    stream: false,
    voice_setting: {
      voice_id: DEFAULT_VOICE_ID,
      speed: CHAPTER_SPEEDS[chapter.chapter] || DEFAULT_SPEED,
      vol: 1,
      pitch: 0
    },
    audio_setting: {
      sample_rate: 32000,
      bitrate: 128000,
      format: "mp3",
      channel: 1
    },
    language_boost: "Chinese",
    subtitle_enable: false,
    output_format: "hex"
  };

  let json;
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt += 1) {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const bodyText = await response.text();
    try {
      json = JSON.parse(bodyText);
    } catch {
      throw new Error(`MiniMax returned non-JSON response: HTTP ${response.status}`);
    }

    const statusCode = json?.base_resp?.status_code;
    if (response.ok && statusCode === 0) break;

    const message = json?.base_resp?.status_msg || bodyText.slice(0, 300);
    if (statusCode === 1002 && attempt < MAX_ATTEMPTS) {
      console.log(`Rate limited by MiniMax. Waiting ${RATE_LIMIT_WAIT_MS / 1000}s before retry ${attempt + 1}/${MAX_ATTEMPTS}...`);
      await sleep(RATE_LIMIT_WAIT_MS);
      continue;
    }

    if (!response.ok) {
      throw new Error(`MiniMax HTTP ${response.status}: ${message}; trace_id=${json?.trace_id || "n/a"}`);
    }

    const error = new Error(`MiniMax status ${statusCode}: ${message}; trace_id=${json?.trace_id || "n/a"}`);
    error.statusCode = statusCode;
    throw error;
  }

  const audioHex = audioHexFromResponse(json);
  const outputPath = path.join(
    OUTPUT_DIR,
    CHAPTER_OUTPUT_FILES[chapter.chapter] || `chapter-${chapter.chapter}.mp3`
  );
  await writeFile(outputPath, Buffer.from(audioHex, "hex"));

  return {
    outputPath,
    audioLengthMs: json?.extra_info?.audio_length,
    audioSize: json?.extra_info?.audio_size,
    traceId: json?.trace_id
  };
}

async function main() {
  const apiKey = await loadApiKey();
  if (!apiKey) {
    throw new Error("MINIMAX_API_KEY is missing. Set it in .env or the shell environment.");
  }

  const markdown = await readFile(SCRIPT_PATH, "utf8");
  const requestedChapters = new Set(process.argv.slice(2));
  const chapters = parseVoiceoverMarkdown(markdown).filter((chapter) => (
    requestedChapters.size === 0 || requestedChapters.has(chapter.chapter)
  ));
  if (chapters.length === 0) {
    throw new Error(`No chapters matched: ${[...requestedChapters].join(", ")}`);
  }

  await mkdir(OUTPUT_DIR, { recursive: true });

  for (const chapter of chapters) {
    const label = `chapter-${chapter.chapter}`;
    console.log(`Generating ${label} (${chapter.duration}s window)...`);
    const result = await generateChapterAudio(apiKey, chapter);
    const seconds = result.audioLengthMs ? (result.audioLengthMs / 1000).toFixed(2) : "unknown";
    console.log(
      `Wrote ${path.relative(PROJECT_ROOT, result.outputPath)} (${seconds}s audio, ${result.audioSize || "unknown"} bytes, trace_id=${result.traceId || "n/a"})`
    );
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
