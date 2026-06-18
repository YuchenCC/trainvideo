# Engineering Standards

## Source Of Truth

- `DESIGN.md` 是视觉风格门禁。
- `data/chapters.json` 是章节结构、结论字幕和颜色角色的来源。
- `docs/hyperframes-authoring.md` 是写合成 HTML 时的技术规则。
- `docs/minimaxi-music-workflow.md` 是从 `minimaxi.com` 获取音乐配置和背景音乐资产的标准流程。
- `docs/quality-checklist.md` 是每章完成前的验收标准。

## Directory Ownership

| Path | Purpose |
| --- | --- |
| `index.html` | 根合成，只做总装配、总时长和全局时间线。 |
| `compositions/scenes/` | 分章子合成，每章一个或多个 HTML 文件。 |
| `compositions/components/` | 可复用组件说明、局部 HTML/CSS/JS 片段。 |
| `data/` | 章节、镜头、字幕、关键词等结构化数据。 |
| `data/music-config-template.json` | MiniMax 音乐配置模板，默认 `voiceid` 为 `moss_audio_ce44fc67-7ce3-11f0-8de5-96e35d26fb85`。 |
| `assets/screenshots/raw/` | 未处理系统截图，保留原始可信证据。 |
| `assets/screenshots/processed/` | 裁切、脱敏、压暗、局部放大准备稿。 |
| `assets/media/audio/` | 人声、旁白、口播。 |
| `assets/media/bgm/` | 背景音乐。 |
| `assets/media/video/` | 原始录屏和外部视频。 |
| `assets/images/` | 生成图、导出图、背景图。 |
| `assets/icons/` | 轻量图标。 |
| `renders/` | 输出 MP4/WebM。 |
| `scripts/` | 后续自动化脚本。 |

## Naming

- 章节合成：`chapter-01-release-chaos.html`
- 章节内元素 ID：`c01-title`, `c01-risk-card`, `c01-proof-shot`
- 截图：`chapter-03-demand-pool-01.png`
- 高亮截图：`chapter-03-demand-pool-highlight-01.png`
- 旁白：`chapter-03-voiceover.wav`
- 背景音乐：`main-theme.wav`

## Composition Policy

- 根合成使用 `index.html`，子合成使用 `<template>`。
- 子合成通过 `data-composition-src="compositions/scenes/<file>.html"` 装配。
- 每个 timed clip 必须有 `class="clip"`、`data-start`、`data-duration`、`data-track-index`。
- `data-track-index` 只控制时间轨道，不控制视觉层级；视觉层级使用 CSS `z-index`。
- 视频必须 `muted playsinline`，音频必须拆成单独 `<audio>`。
- 所有 GSAP timeline 必须 `{ paused: true }` 并注册到 `window.__timelines`。
- 不使用 `Math.random()`、`Date.now()`、网络 fetch 或异步构建 timeline。

## Copy Limits

- 一级标题 10 到 18 字。
- 二级标签不超过 6 字。
- 主字幕一句话，不超过 18 字。
- 关键词不超过 4 个。
- 单屏说明文字不超过 2 行，每行不超过 18 字。
- 不用逐字字幕主导画面，除非后续明确要做口播字幕版本。

## Definition Of Done

- 章节只讲一个核心观点。
- 画面能独立表达“问题 -> 机制 -> 证明 -> 结论”。
- 截图清晰，有局部放大或高亮，且不遮挡字幕。
- 动效克制，每 3 到 5 秒有一个明确视觉动作。
- `npm run check` 通过或所有 inspect 警告均有记录和解释。
