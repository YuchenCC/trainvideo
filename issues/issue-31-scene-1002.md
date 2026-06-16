# Issue 31 | Scene 10-2 HTML 实现

## 全局约定

## 全局约定

- 输出路径命名：`Scene 01-1` -> `compositions/scenes/scene-0101.html`，`Scene 11-2` -> `compositions/scenes/scene-1102.html`。
- 每个 HTML 必须是 1920x1080、16:9 横版、浅色科技背景、技术讲解博主风格。
- 每个 HTML 必须使用 `DESIGN.md` 中的 token：`Background`、`Text Primary`、`Text Secondary`、`Tech Blue`、`Governance Purple`、`AI Orange`、`Risk Red`、`Done Green`、`Warning Yellow`。
- 每个 scene 主视觉元素不得超过 6 个；动画只做主视图内状态变化，不做跨画面入场、大幅旋转、复杂粒子。
- 每个 scene 的字幕是观点字幕，不是口播全文；底部字幕必须清晰可读。
- 每个 scene 完成后需可单独打开对应 HTML 预览，并能按合同时间点完成状态变化。

## Issue 内容
- 任务标题：实现 Scene 10-2 独立 HTML
- 时间：04:17 - 04:30
- 目标：说明 Agent 调度和领域上下文沉淀贯穿 PRD、设计、测试、代码结构的双向映射。

### 输入

- 合同来源：`scene-contract.md` -> `Scene 10-2`
- 分镜参考：`storyboard.md` -> `Scene 10-2`
- 视觉规范：`DESIGN.md`
- 使用 token：`Background`、`Text Primary`、`Text Secondary`、`AI Orange`、`Governance Purple`、`Tech Blue`
- 画面主体：研发流水线、AI Agent 调度层、领域上下文层、PRD/设计节点组、测试/代码节点组、双向映射线。
- 必须出现：PRD、设计文档、测试案例、代码结构；Agent 调度；领域上下文；双向映射。
- 动画步骤：
  - 04:17 - 04:21：流水线节点从文档端到代码端逐项高亮。
  - 04:21 - 04:26：上方 `AI Orange` 调度层与底部领域上下文层同时关联中间流水线。
  - 04:26 - 04:30：PRD、设计文档、测试案例与代码结构之间的映射线切换为双向确认状态。
- 字幕：Agent 调度，贯穿研发资产；Agent 调度｜领域上下文｜双向映射。
- 禁止事项：禁止把流水线扩展到超过七个节点；禁止只画单向箭头；禁止省略领域上下文层。

### 输出

- HTML 文件：`compositions/scenes/scene-1002.html`
- 文件要求：独立 scene HTML，可被后续总片或预览器加载；样式和动画写在文件内或项目约定的共享资源中。
- 命名要求：不得改名，不得输出到 `scenes/`、`renders/` 或其他目录。

### 验收标准

- `compositions/scenes/scene-1002.html` 文件存在，打开后显示 Scene 10-2。
- 时间点与动画步骤一致：
  - 04:17 - 04:21：流水线节点从文档端到代码端逐项高亮。
  - 04:21 - 04:26：上方 `AI Orange` 调度层与底部领域上下文层同时关联中间流水线。
  - 04:26 - 04:30：PRD、设计文档、测试案例与代码结构之间的映射线切换为双向确认状态。
- scene 主视觉元素不超过 6 个，且包含合同规定的主体：研发流水线、AI Agent 调度层、领域上下文层、PRD/设计节点组、测试/代码节点组、双向映射线。
- 必须出现内容完整：PRD、设计文档、测试案例、代码结构；Agent 调度；领域上下文；双向映射。
- 字幕准确显示：Agent 调度，贯穿研发资产；Agent 调度｜领域上下文｜双向映射。
- 遵守禁止事项：禁止把流水线扩展到超过七个节点；禁止只画单向箭头；禁止省略领域上下文层。
- 具体画面验收：四个核心资产可读；上下两层关系清晰；双向映射状态明确。
