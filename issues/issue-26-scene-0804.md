# Issue 26 | Scene 08-4 HTML 实现

## 全局约定

## 全局约定

- 输出路径命名：`Scene 01-1` -> `compositions/scenes/scene-0101.html`，`Scene 11-2` -> `compositions/scenes/scene-1102.html`。
- 每个 HTML 必须是 1920x1080、16:9 横版、浅色科技背景、技术讲解博主风格。
- 每个 HTML 必须使用 `DESIGN.md` 中的 token：`Background`、`Text Primary`、`Text Secondary`、`Tech Blue`、`Governance Purple`、`AI Orange`、`Risk Red`、`Done Green`、`Warning Yellow`。
- 每个 scene 主视觉元素不得超过 6 个；动画只做主视图内状态变化，不做跨画面入场、大幅旋转、复杂粒子。
- 每个 scene 的字幕是观点字幕，不是口播全文；底部字幕必须清晰可读。
- 每个 scene 完成后需可单独打开对应 HTML 预览，并能按合同时间点完成状态变化。

## Issue 内容
- 任务标题：实现 Scene 08-4 独立 HTML
- 时间：03:42 - 03:46
- 目标：用三段链路总结沟通如何变成治理数据。

### 输入

- 合同来源：`scene-contract.md` -> `Scene 08-4`
- 分镜参考：`storyboard.md` -> `Scene 08-4`
- 视觉规范：`DESIGN.md`
- 使用 token：`Background`、`Text Primary`、`Text Secondary`、`Tech Blue`、`AI Orange`、`Done Green`
- 画面主体：飞书节点、AI Agent 节点、系统建档节点、链路线、治理数据结论条、仪表盘入口。
- 必须出现：飞书 → AI Agent → 系统建档；沟通变成治理数据。
- 动画步骤：
  - 03:42 - 03:43：飞书节点处于已触发状态。
  - 03:43 - 03:45：三段链路按顺序点亮，状态从临时沟通切换为流程化记录。
  - 03:45 - 03:46：治理数据结论条固定，画面右侧形成仪表盘入口。
- 字幕：沟通变成治理数据；可治理数据。
- 禁止事项：禁止链路超过三段；禁止节点之间关系不清；禁止结论条过小。

### 输出

- HTML 文件：`compositions/scenes/scene-0804.html`
- 文件要求：独立 scene HTML，可被后续总片或预览器加载；样式和动画写在文件内或项目约定的共享资源中。
- 命名要求：不得改名，不得输出到 `scenes/`、`renders/` 或其他目录。

### 验收标准

- `compositions/scenes/scene-0804.html` 文件存在，打开后显示 Scene 08-4。
- 时间点与动画步骤一致：
  - 03:42 - 03:43：飞书节点处于已触发状态。
  - 03:43 - 03:45：三段链路按顺序点亮，状态从临时沟通切换为流程化记录。
  - 03:45 - 03:46：治理数据结论条固定，画面右侧形成仪表盘入口。
- scene 主视觉元素不超过 6 个，且包含合同规定的主体：飞书节点、AI Agent 节点、系统建档节点、链路线、治理数据结论条、仪表盘入口。
- 必须出现内容完整：飞书 → AI Agent → 系统建档；沟通变成治理数据。
- 字幕准确显示：沟通变成治理数据；可治理数据。
- 遵守禁止事项：禁止链路超过三段；禁止节点之间关系不清；禁止结论条过小。
- 具体画面验收：三段链路在 4 秒内读完；AI Agent 使用 `AI Orange`；仪表盘入口自然露出。
