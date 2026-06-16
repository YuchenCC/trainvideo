# Issue 33 | Scene 10-4 HTML 实现

## 全局约定

## 全局约定

- 输出路径命名：`Scene 01-1` -> `compositions/scenes/scene-0101.html`，`Scene 11-2` -> `compositions/scenes/scene-1102.html`。
- 每个 HTML 必须是 1920x1080、16:9 横版、浅色科技背景、技术讲解博主风格。
- 每个 HTML 必须使用 `DESIGN.md` 中的 token：`Background`、`Text Primary`、`Text Secondary`、`Tech Blue`、`Governance Purple`、`AI Orange`、`Risk Red`、`Done Green`、`Warning Yellow`。
- 每个 scene 主视觉元素不得超过 6 个；动画只做主视图内状态变化，不做跨画面入场、大幅旋转、复杂粒子。
- 每个 scene 的字幕是观点字幕，不是口播全文；底部字幕必须清晰可读。
- 每个 scene 完成后需可单独打开对应 HTML 预览，并能按合同时间点完成状态变化。

## Issue 内容
- 任务标题：实现 Scene 10-4 独立 HTML
- 时间：04:42 - 04:50
- 目标：用一句结论收束：不是产品加 AI，而是研发过程 AI 原生化。

### 输入

- 合同来源：`scene-contract.md` -> `Scene 10-4`
- 分镜参考：`storyboard.md` -> `Scene 10-4`
- 视觉规范：`DESIGN.md`
- 使用 token：`Background`、`Text Primary`、`Text Secondary`、`Governance Purple`、`AI Orange`、`Done Green`
- 画面主体：质量闭环图、PRD 缩略、测试缩略、代码缩略、系统界面缩略、中心结论文字。
- 必须出现：研发过程 AI 原生化；不是产品加 AI，而是研发过程 AI 原生化。
- 动画步骤：
  - 04:42 - 04:45：质量闭环在中心压缩为结论区域。
  - 04:45 - 04:48：背景缩略图降低对比度，中心“研发过程 AI 原生化”增强。
  - 04:48 - 04:50：结论文字下方生成小型模块车厢，为总结回闪准备。
- 字幕：不是产品加 AI，而是研发过程 AI 原生化。
- 禁止事项：禁止背景缩略图抢焦点；禁止结论字数过长；禁止重复铺满口播原文。

### 输出

- HTML 文件：`compositions/scenes/scene-1004.html`
- 文件要求：独立 scene HTML，可被后续总片或预览器加载；样式和动画写在文件内或项目约定的共享资源中。
- 命名要求：不得改名，不得输出到 `scenes/`、`renders/` 或其他目录。

### 验收标准

- `compositions/scenes/scene-1004.html` 文件存在，打开后显示 Scene 10-4。
- 时间点与动画步骤一致：
  - 04:42 - 04:45：质量闭环在中心压缩为结论区域。
  - 04:45 - 04:48：背景缩略图降低对比度，中心“研发过程 AI 原生化”增强。
  - 04:48 - 04:50：结论文字下方生成小型模块车厢，为总结回闪准备。
- scene 主视觉元素不超过 6 个，且包含合同规定的主体：质量闭环图、PRD 缩略、测试缩略、代码缩略、系统界面缩略、中心结论文字。
- 必须出现内容完整：研发过程 AI 原生化；不是产品加 AI，而是研发过程 AI 原生化。
- 字幕准确显示：不是产品加 AI，而是研发过程 AI 原生化。
- 遵守禁止事项：禁止背景缩略图抢焦点；禁止结论字数过长；禁止重复铺满口播原文。
- 具体画面验收：中心结论 2 秒内可读；背景为辅助信息；模块车厢能进入总结回闪。
