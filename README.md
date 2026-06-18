# AI 原生 BizDevOps 版本火车系统 HyperFrames 项目

本项目根据 `Hyperframe 视频风格规范文档 v1.0` 建立，用于制作 5 分钟以内、1920x1080 横版的 HyperFrames 项目介绍片。核心表达方式是“技术讲解博主式”：用问题引入、用图解拆解、用系统截图证明、用金句收束。

## 快速命令

```bash
npm run dev
npm run check
npm run render:draft
npm run render:high
```

`npm run check` 会依次执行 lint、validate、inspect；每次修改 `.html` 合成后都要跑一次。

## 工程结构

```text
.
├─ index.html                  # 根合成，负责总时间线和章节装配
├─ DESIGN.md                   # 视觉身份和风格门禁，写任何合成前先读
├─ hyperframes.json            # HyperFrames 路径配置
├─ meta.json                   # 项目信息
├─ package.json                # 预览、检查、渲染命令
├─ assets/
│  ├─ screenshots/raw/         # 原始系统截图
│  ├─ screenshots/processed/   # 已裁切、打码、标注前的处理稿
│  ├─ media/audio/             # 口播、人声、旁白
│  ├─ media/bgm/               # 背景音乐
│  ├─ media/video/             # 外部视频素材
│  ├─ images/                  # 图形、背景、导出图片
│  └─ icons/                   # 轻量图标素材
├─ compositions/
│  ├─ scenes/                  # 分章子合成，命名为 chapter-01-*.html
│  └─ components/              # 可复用局部组件或代码片段说明
├─ data/
│  ├─ chapters.json            # 11 章结构化规划
│  └─ shot-template.json       # 单镜头规格模板
├─ docs/
│  ├─ engineering-standards.md # 工程约定
│  ├─ hyperframes-authoring.md # HyperFrames 写作规范
│  ├─ asset-guidelines.md      # 截图和素材规范
│  ├─ minimaxi-music-workflow.md # MiniMax 音乐配置流程
│  ├─ prompt-template.md       # 每章 Prompt 模板
│  └─ quality-checklist.md     # 质量检查清单
├─ renders/                    # 渲染输出
└─ scripts/                    # 后续自动化脚本
```

## 制作流程

1. 先读 `DESIGN.md`，确认色彩、字体、字幕和动效边界。
2. 在 `data/chapters.json` 中选择章节，只围绕一个核心观点写镜头。
3. 将原始截图放到 `assets/screenshots/raw/`，处理稿放到 `assets/screenshots/processed/`。
4. 需要背景音乐时，按 `docs/minimaxi-music-workflow.md` 从 `minimaxi.com` 获取音乐配置，默认 `voiceid` 为 `moss_audio_ce44fc67-7ce3-11f0-8de5-96e35d26fb85`。
5. 在 `compositions/scenes/` 新建分章子合成，并在 `index.html` 装配。
6. 每章遵循“问题出现 -> 机制拆解 -> 系统截图证明 -> 关键词总结”。
7. 修改完成后执行 `npm run check`，确认没有 lint、validate、inspect 问题。

## 命名约定

- 分章合成：`compositions/scenes/chapter-01-release-chaos.html`
- 组件说明：`compositions/components/<component-name>.md`
- 原始截图：`assets/screenshots/raw/chapter-03-demand-pool-01.png`
- 处理截图：`assets/screenshots/processed/chapter-03-demand-pool-highlight-01.png`
- 旁白音频：`assets/media/audio/chapter-03-voiceover.wav`
- 背景音乐：`assets/media/bgm/main-theme.wav`
- 渲染文件：`renders/final.mp4`

## 内容总标准

用技术博主讲原理的方式，讲清一个企业级 AI 原生 BizDevOps 系统；用图解降低理解成本，用截图证明真实落地，用统一视觉建立专业可信感。
