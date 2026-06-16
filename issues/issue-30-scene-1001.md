# Issue 30 | Scene 10-1 HTML 实现

## 全局约定

## 全局约定

- 输出路径命名：`Scene 01-1` -> `compositions/scenes/scene-0101.html`，`Scene 11-2` -> `compositions/scenes/scene-1102.html`。
- 每个 HTML 必须是 1920x1080、16:9 横版、浅色科技背景、技术讲解博主风格。
- 每个 HTML 必须使用 `DESIGN.md` 中的 token：`Background`、`Text Primary`、`Text Secondary`、`Tech Blue`、`Governance Purple`、`AI Orange`、`Risk Red`、`Done Green`、`Warning Yellow`。
- 每个 scene 主视觉元素不得超过 6 个；动画只做主视图内状态变化，不做跨画面入场、大幅旋转、复杂粒子。
- 每个 scene 的字幕是观点字幕，不是口播全文；底部字幕必须清晰可读。
- 每个 scene 完成后需可单独打开对应 HTML 预览，并能按合同时间点完成状态变化。

## Issue 内容
- 任务标题：实现 Scene 10-1 独立 HTML
- 时间：04:08 - 04:17
- 目标：区分“产品加 AI”和“AI 原生研发过程重构”。

### 输入

- 合同来源：`scene-contract.md` -> `Scene 10-1`
- 分镜参考：`storyboard.md` -> `Scene 10-1`
- 视觉规范：`DESIGN.md`
- 使用 token：`Background`、`Text Primary`、`Text Secondary`、`Governance Purple`、`AI Orange`、`Tech Blue`
- 画面主体：产品加 AI 左栏、AI 原生研发右栏、功能点标签、过程标签、资产标签、质量闭环标签。
- 必须出现：产品加 AI；AI 原生研发；过程、资产、质量闭环重构。
- 动画步骤：
  - 04:08 - 04:11：左侧功能点接入模型区域透明度降低，右侧 AI 原生研发区域增强。
  - 04:11 - 04:14：视觉权重向右侧倾斜，右侧过程、资产、质量节点形成闭环关系。
  - 04:14 - 04:17：右侧占据主视图，三类关键词纳入研发过程框架。
- 字幕：不只是产品用 AI；以 AI 原生方式重构研发过程。
- 禁止事项：禁止把 AI 原生讲成单个模型能力；禁止左右对比含糊；禁止使用营销空话。

### 输出

- HTML 文件：`compositions/scenes/scene-1001.html`
- 文件要求：独立 scene HTML，可被后续总片或预览器加载；样式和动画写在文件内或项目约定的共享资源中。
- 命名要求：不得改名，不得输出到 `scenes/`、`renders/` 或其他目录。

### 验收标准

- `compositions/scenes/scene-1001.html` 文件存在，打开后显示 Scene 10-1。
- 时间点与动画步骤一致：
  - 04:08 - 04:11：左侧功能点接入模型区域透明度降低，右侧 AI 原生研发区域增强。
  - 04:11 - 04:14：视觉权重向右侧倾斜，右侧过程、资产、质量节点形成闭环关系。
  - 04:14 - 04:17：右侧占据主视图，三类关键词纳入研发过程框架。
- scene 主视觉元素不超过 6 个，且包含合同规定的主体：产品加 AI 左栏、AI 原生研发右栏、功能点标签、过程标签、资产标签、质量闭环标签。
- 必须出现内容完整：产品加 AI；AI 原生研发；过程、资产、质量闭环重构。
- 字幕准确显示：不只是产品用 AI；以 AI 原生方式重构研发过程。
- 遵守禁止事项：禁止把 AI 原生讲成单个模型能力；禁止左右对比含糊；禁止使用营销空话。
- 具体画面验收：左弱右强明确；“研发过程”是主语；框架可展开为流水线。
