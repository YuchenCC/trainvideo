# MiniMax Music Workflow

本流程用于通过 `minimaxi.com` 获取本项目的音乐配置和音乐资产。它只定义项目标准，不保存密钥，不替代最终的听感审核。

## Defaults

| Field | Value |
| --- | --- |
| `provider` | `minimaxi.com` |
| `model` | `music-2.6` |
| `voiceid` | `moss_audio_ce44fc67-7ce3-11f0-8de5-96e35d26fb85` |
| `sample_rate` | `44100` |
| `bitrate` | `256000` |
| `format` | `mp3` |

## Standard Workflow

1. 先读 `DESIGN.md`、`storyboard.md` 和 `scene-time-subtitles.md`，明确音乐服务的情绪、节奏和段落，而不是先生成一首通用背景音乐。
2. 在 `data/music-config-template.json` 复制一份为 `data/music-config.json`，保留默认 `voiceid`，填写 `title`、`duration_seconds`、`prompt`、`lyrics`、`is_instrumental` 和 `usage_notes`。
3. 打开 `https://www.minimaxi.com/audio` 或 MiniMax 开放平台音乐生成页，使用配置里的 `prompt`、`lyrics`、`model` 和 `audio_setting` 生成音乐。
4. 若用于项目介绍片背景音乐，默认设置 `is_instrumental: true`，避免人声与口播抢占频段；只有明确制作主题曲或片尾曲时才写歌词。
5. 试听时检查三点：前 8 秒是否能建立专业感，60 到 90 秒是否不会疲劳，是否给口播留出中频空间。
6. 下载最终音频到 `assets/media/bgm/`，命名为 `main-theme.mp3` 或 `chapter-XX-<slug>.mp3`。
7. 把最终配置、下载文件名、生成时间、人工选择原因写回 `data/music-config.json`，不要只保留网页上的历史记录。
8. 在 HyperFrames 中使用独立 `<audio>` 元素挂载音乐；如果同一段画面有视频，视频仍必须 `muted playsinline`。

## Config Contract

`data/music-config.json` 使用下面的字段语义：

| Field | Required | Notes |
| --- | --- | --- |
| `provider` | Yes | 固定为 `minimaxi.com`。 |
| `model` | Yes | 默认 `music-2.6`；如使用免费模型或翻唱模型，在这里显式记录。 |
| `voiceid` | Yes | 默认 `moss_audio_ce44fc67-7ce3-11f0-8de5-96e35d26fb85`。 |
| `prompt` | Yes | 用逗号分隔风格、情绪、场景和制作要求。 |
| `lyrics` | Conditional | 纯音乐可为空；非纯音乐必须填写。 |
| `is_instrumental` | Yes | 项目介绍片背景音乐默认 `true`。 |
| `audio_setting` | Yes | 统一输出 `mp3`、`44100`、`256000`。 |
| `asset_path` | Yes after download | 指向 `assets/media/bgm/` 下的最终文件。 |
| `usage_notes` | Yes | 说明适用章节、混音音量和避让口播的要求。 |

## Prompt Baseline

```text
clean technology documentary background music, confident, precise, restrained, modern enterprise software, steady pulse, light electronic percussion, subtle piano motifs, no vocals, no dramatic trailer hits, leaves room for Mandarin narration
```

## HyperFrames Mount Example

```html
<audio
  id="main-bgm"
  class="clip"
  data-start="0"
  data-duration="180"
  data-track-index="10"
  data-volume="0.18"
  src="assets/media/bgm/main-theme.mp3"
></audio>
```

