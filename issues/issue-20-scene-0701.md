# Issue 20 | Scene 07-1 HTML 实现

## 全局约定

## 全局约定

- 输出路径命名：`Scene 01-1` -> `compositions/scenes/scene-0101.html`，`Scene 11-2` -> `compositions/scenes/scene-1102.html`。
- 每个 HTML 必须是 1920x1080、16:9 横版、浅色科技背景、技术讲解博主风格。
- 每个 HTML 必须使用 `DESIGN.md` 中的 token：`Background`、`Text Primary`、`Text Secondary`、`Tech Blue`、`Governance Purple`、`AI Orange`、`Risk Red`、`Done Green`、`Warning Yellow`。
- 每个 scene 主视觉元素不得超过 6 个；动画只做主视图内状态变化，不做跨画面入场、大幅旋转、复杂粒子。
- 每个 scene 的字幕是观点字幕，不是口播全文；底部字幕必须清晰可读。
- 每个 scene 完成后需可单独打开对应 HTML 预览，并能按合同时间点完成状态变化。

## Issue 内容
- 任务标题：实现 Scene 07-1 独立 HTML
- 时间：02:47 - 02:55
- 目标：建立封板作为版本治理分水岭的概念。

### 输入

- 合同来源：`scene-contract.md` -> `Scene 07-1`
- 分镜参考：`storyboard.md` -> `Scene 07-1`
- 视觉规范：`DESIGN.md`
- 使用 token：`Background`、`Text Primary`、`Text Secondary`、`Governance Purple`、`Tech Blue`、`Risk Red`
- 画面主体：封板分界线、封板前区域、封板后区域、治理闸门、权限状态标签、审批路径入口。
- 必须出现：封板；封板前；封板后；分级变更管控。
- 动画步骤：
  - 02:47 - 02:50：中央分界线由浅灰增强为深色治理边界。
  - 02:50 - 02:53：左侧保持可调整状态，右侧切换为受控状态。
  - 02:53 - 02:55：闸门闭合，右侧审批路径被激活。
- 字幕：封板，是版本治理的分水岭；分级变更管控。
- 禁止事项：禁止只做分割线不体现权限变化；禁止闸门写实厚重；禁止右侧审批入口缺失。

### 输出

- HTML 文件：`compositions/scenes/scene-0701.html`
- 文件要求：独立 scene HTML，可被后续总片或预览器加载；样式和动画写在文件内或项目约定的共享资源中。
- 命名要求：不得改名，不得输出到 `scenes/`、`renders/` 或其他目录。

### 验收标准

- `compositions/scenes/scene-0701.html` 文件存在，打开后显示 Scene 07-1。
- 时间点与动画步骤一致：
  - 02:47 - 02:50：中央分界线由浅灰增强为深色治理边界。
  - 02:50 - 02:53：左侧保持可调整状态，右侧切换为受控状态。
  - 02:53 - 02:55：闸门闭合，右侧审批路径被激活。
- scene 主视觉元素不超过 6 个，且包含合同规定的主体：封板分界线、封板前区域、封板后区域、治理闸门、权限状态标签、审批路径入口。
- 必须出现内容完整：封板；封板前；封板后；分级变更管控。
- 字幕准确显示：封板，是版本治理的分水岭；分级变更管控。
- 遵守禁止事项：禁止只做分割线不体现权限变化；禁止闸门写实厚重；禁止右侧审批入口缺失。
- 具体画面验收：封板前后差异明确；`Governance Purple` 表示治理边界；结尾能展开审批流程。
