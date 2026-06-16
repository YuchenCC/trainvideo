# Issue 22 | Scene 07-3 HTML 实现

## 全局约定

## 全局约定

- 输出路径命名：`Scene 01-1` -> `compositions/scenes/scene-0101.html`，`Scene 11-2` -> `compositions/scenes/scene-1102.html`。
- 每个 HTML 必须是 1920x1080、16:9 横版、浅色科技背景、技术讲解博主风格。
- 每个 HTML 必须使用 `DESIGN.md` 中的 token：`Background`、`Text Primary`、`Text Secondary`、`Tech Blue`、`Governance Purple`、`AI Orange`、`Risk Red`、`Done Green`、`Warning Yellow`。
- 每个 scene 主视觉元素不得超过 6 个；动画只做主视图内状态变化，不做跨画面入场、大幅旋转、复杂粒子。
- 每个 scene 的字幕是观点字幕，不是口播全文；底部字幕必须清晰可读。
- 每个 scene 完成后需可单独打开对应 HTML 预览，并能按合同时间点完成状态变化。

## Issue 内容
- 任务标题：实现 Scene 07-3 独立 HTML
- 时间：03:05 - 03:16
- 目标：用紧急变更弹窗证明每次变更可追溯、可评估、可审计。

### 输入

- 合同来源：`scene-contract.md` -> `Scene 07-3`
- 分镜参考：`storyboard.md` -> `Scene 07-3`
- 视觉规范：`DESIGN.md`
- 使用 token：`Background`、`Text Primary`、`Text Secondary`、`Tech Blue`、`Risk Red`、`Done Green`
- 画面主体：紧急变更弹窗、审批区域、风险区域、操作留痕区、状态标签、审计记录确认条。
- 必须出现：审批、风险、操作留痕；已审批 / 已留痕；可追溯、可评估、可审计。
- 动画步骤：
  - 03:05 - 03:09：审批区域被 `Tech Blue` 高亮框锁定，状态为待审批。
  - 03:09 - 03:13：风险标签从 `Risk Red` 待处理切换为 `Done Green` 已审批 / 已留痕。
  - 03:13 - 03:16：审批、风险、留痕三处高亮稳定，弹窗底部生成审计记录确认条。
- 字幕：每一次变更都可追溯、可评估、可审计。
- 禁止事项：禁止弹窗全屏无重点；禁止绿色通过状态提前出现；禁止审计留痕缺失。

### 输出

- HTML 文件：`compositions/scenes/scene-0703.html`
- 文件要求：独立 scene HTML，可被后续总片或预览器加载；样式和动画写在文件内或项目约定的共享资源中。
- 命名要求：不得改名，不得输出到 `scenes/`、`renders/` 或其他目录。

### 验收标准

- `compositions/scenes/scene-0703.html` 文件存在，打开后显示 Scene 07-3。
- 时间点与动画步骤一致：
  - 03:05 - 03:09：审批区域被 `Tech Blue` 高亮框锁定，状态为待审批。
  - 03:09 - 03:13：风险标签从 `Risk Red` 待处理切换为 `Done Green` 已审批 / 已留痕。
  - 03:13 - 03:16：审批、风险、留痕三处高亮稳定，弹窗底部生成审计记录确认条。
- scene 主视觉元素不超过 6 个，且包含合同规定的主体：紧急变更弹窗、审批区域、风险区域、操作留痕区、状态标签、审计记录确认条。
- 必须出现内容完整：审批、风险、操作留痕；已审批 / 已留痕；可追溯、可评估、可审计。
- 字幕准确显示：每一次变更都可追溯、可评估、可审计。
- 遵守禁止事项：禁止弹窗全屏无重点；禁止绿色通过状态提前出现；禁止审计留痕缺失。
- 具体画面验收：风险状态颜色变化明确；三类能力全部出现；操作留痕记录可转为飞书消息。
