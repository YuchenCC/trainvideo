# Issue 11 | Scene 04-2 HTML 实现

## 全局约定

## 全局约定

- 输出路径命名：`Scene 01-1` -> `compositions/scenes/scene-0101.html`，`Scene 11-2` -> `compositions/scenes/scene-1102.html`。
- 每个 HTML 必须是 1920x1080、16:9 横版、浅色科技背景、技术讲解博主风格。
- 每个 HTML 必须使用 `DESIGN.md` 中的 token：`Background`、`Text Primary`、`Text Secondary`、`Tech Blue`、`Governance Purple`、`AI Orange`、`Risk Red`、`Done Green`、`Warning Yellow`。
- 每个 scene 主视觉元素不得超过 6 个；动画只做主视图内状态变化，不做跨画面入场、大幅旋转、复杂粒子。
- 每个 scene 的字幕是观点字幕，不是口播全文；底部字幕必须清晰可读。
- 每个 scene 完成后需可单独打开对应 HTML 预览，并能按合同时间点完成状态变化。

## Issue 内容
- 任务标题：实现 Scene 04-2 独立 HTML
- 时间：01:30 - 01:40
- 目标：说明 AI 自动校验需求完整性、识别风险和模糊表达，并补全标准。

### 输入

- 合同来源：`scene-contract.md` -> `Scene 04-2`
- 分镜参考：`storyboard.md` -> `Scene 04-2`
- 视觉规范：`DESIGN.md`
- 使用 token：`Background`、`Text Primary`、`Text Secondary`、`AI Orange`、`Risk Red`、`Done Green`
- 画面主体：需求卡片、AI 扫描框、完整性检查、风险/模糊表达检查、验收标准补全、备注补全。
- 必须出现：完整性、风险点、模糊表达、验收标准、备注补全。
- 动画步骤：
  - 01:30 - 01:33：`AI Orange` 扫描框在需求卡片内部推进，文本区域被分段标注。
  - 01:33 - 01:36：完整性、风险点、模糊表达从未检查切换为已识别，风险项使用 `Risk Red`。
  - 01:36 - 01:40：验收标准与备注从空白切换为已补全，补全状态使用 `Done Green`。
- 字幕：AI 自动校验、识别风险、补全标准；自动校验｜风险识别｜模糊表达｜智能补全。
- 禁止事项：禁止泛泛写“AI 分析中”；禁止漏掉验收标准与备注补全；禁止扫描框大幅缩放。

### 输出

- HTML 文件：`compositions/scenes/scene-0402.html`
- 文件要求：独立 scene HTML，可被后续总片或预览器加载；样式和动画写在文件内或项目约定的共享资源中。
- 命名要求：不得改名，不得输出到 `scenes/`、`renders/` 或其他目录。

### 验收标准

- `compositions/scenes/scene-0402.html` 文件存在，打开后显示 Scene 04-2。
- 时间点与动画步骤一致：
  - 01:30 - 01:33：`AI Orange` 扫描框在需求卡片内部推进，文本区域被分段标注。
  - 01:33 - 01:36：完整性、风险点、模糊表达从未检查切换为已识别，风险项使用 `Risk Red`。
  - 01:36 - 01:40：验收标准与备注从空白切换为已补全，补全状态使用 `Done Green`。
- scene 主视觉元素不超过 6 个，且包含合同规定的主体：需求卡片、AI 扫描框、完整性检查、风险/模糊表达检查、验收标准补全、备注补全。
- 必须出现内容完整：完整性、风险点、模糊表达、验收标准、备注补全。
- 字幕准确显示：AI 自动校验、识别风险、补全标准；自动校验｜风险识别｜模糊表达｜智能补全。
- 遵守禁止事项：禁止泛泛写“AI 分析中”；禁止漏掉验收标准与备注补全；禁止扫描框大幅缩放。
- 具体画面验收：五个检查项齐全；风险和完成状态颜色符合 token；补全后能转入弹窗截图。
