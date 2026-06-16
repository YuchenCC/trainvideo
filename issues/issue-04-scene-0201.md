# Issue 04 | Scene 02-1 HTML 实现

## 全局约定

## 全局约定

- 输出路径命名：`Scene 01-1` -> `compositions/scenes/scene-0101.html`，`Scene 11-2` -> `compositions/scenes/scene-1102.html`。
- 每个 HTML 必须是 1920x1080、16:9 横版、浅色科技背景、技术讲解博主风格。
- 每个 HTML 必须使用 `DESIGN.md` 中的 token：`Background`、`Text Primary`、`Text Secondary`、`Tech Blue`、`Governance Purple`、`AI Orange`、`Risk Red`、`Done Green`、`Warning Yellow`。
- 每个 scene 主视觉元素不得超过 6 个；动画只做主视图内状态变化，不做跨画面入场、大幅旋转、复杂粒子。
- 每个 scene 的字幕是观点字幕，不是口播全文；底部字幕必须清晰可读。
- 每个 scene 完成后需可单独打开对应 HTML 预览，并能按合同时间点完成状态变化。

## Issue 内容
- 任务标题：实现 Scene 02-1 独立 HTML
- 时间：00:28 - 00:36
- 目标：从混乱状态转入版本火车治理框架。

### 输入

- 合同来源：`scene-contract.md` -> `Scene 02-1`
- 分镜参考：`storyboard.md` -> `Scene 02-1`
- 视觉规范：`DESIGN.md`
- 使用 token：`Background`、`Text Primary`、`Text Secondary`、`Tech Blue`、`Risk Red`、`Governance Purple`
- 画面主体：缠绕线、清晰轨道、DevOps 工具链底座、系统标题、治理主线、车头轮廓。
- 必须出现：从混乱协同，到版本火车治理；DevOps 工具链底座；AI 原生 BizDevOps 版本火车系统。
- 动画步骤：
  - 00:28 - 00:31：红色缠绕线逐段理顺，颜色从 `Risk Red` 降为蓝灰。
  - 00:31 - 00:34：线条稳定为清晰轨道，底座区域用 `Tech Blue` 高亮。
  - 00:34 - 00:36：系统标题与轨道锁定对齐，轨道前端形成车头轮廓。
- 字幕：从混乱协同，到版本火车治理。
- 禁止事项：禁止把轨道做成写实铁路；禁止做成企业 PPT 标题页；禁止底座信息缺失。

### 输出

- HTML 文件：`compositions/scenes/scene-0201.html`
- 文件要求：独立 scene HTML，可被后续总片或预览器加载；样式和动画写在文件内或项目约定的共享资源中。
- 命名要求：不得改名，不得输出到 `scenes/`、`renders/` 或其他目录。

### 验收标准

- `compositions/scenes/scene-0201.html` 文件存在，打开后显示 Scene 02-1。
- 时间点与动画步骤一致：
  - 00:28 - 00:31：红色缠绕线逐段理顺，颜色从 `Risk Red` 降为蓝灰。
  - 00:31 - 00:34：线条稳定为清晰轨道，底座区域用 `Tech Blue` 高亮。
  - 00:34 - 00:36：系统标题与轨道锁定对齐，轨道前端形成车头轮廓。
- scene 主视觉元素不超过 6 个，且包含合同规定的主体：缠绕线、清晰轨道、DevOps 工具链底座、系统标题、治理主线、车头轮廓。
- 必须出现内容完整：从混乱协同，到版本火车治理；DevOps 工具链底座；AI 原生 BizDevOps 版本火车系统。
- 字幕准确显示：从混乱协同，到版本火车治理。
- 遵守禁止事项：禁止把轨道做成写实铁路；禁止做成企业 PPT 标题页；禁止底座信息缺失。
- 具体画面验收：转场逻辑为“混乱线条被治理主线整理”；标题和底座都可读；车头轮廓可承接下一 scene。
