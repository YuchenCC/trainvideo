# Asset Guidelines

## Screenshot Workflow

1. 原始截图保存到 `assets/screenshots/raw/`，不要覆盖。
2. 处理稿保存到 `assets/screenshots/processed/`。
3. 处理稿只做必要的裁切、脱敏、压暗、局部放大准备。
4. 高亮框、箭头、标签优先在合成 HTML 中实现，方便动画和统一风格。

## Screenshot Rules

- 截图是可信度来源，不是画面填充物。
- 不直接堆满屏。
- 不让截图细节遮挡字幕。
- 页面细节必须可读；看不清就做局部放大。
- 全屏静态截图不要超过 5 秒。

## Media Rules

- 视频素材放 `assets/media/video/`。
- 口播和旁白放 `assets/media/audio/`。
- 背景音乐放 `assets/media/bgm/`。
- 通过 `minimaxi.com` 生成背景音乐前，先按 `docs/minimaxi-music-workflow.md` 填写 `data/music-config.json`，默认 `voiceid` 为 `moss_audio_ce44fc67-7ce3-11f0-8de5-96e35d26fb85`。
- 外部媒体元素加 `crossorigin="anonymous"`。
- 视频作为视觉层必须 `muted playsinline`，声音另放 `<audio>`。

## Icon And Image Rules

- 图标保持轻量、线性、工程感。
- 不使用复杂 3D 科技空间、花哨粒子、暗黑赛博背景。
- 背景可使用轻微网格、坐标线、流程线。
- 任何图像都要服务“讲清机制”，不能只做氛围。
