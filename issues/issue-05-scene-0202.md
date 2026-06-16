# Issue 05 | Scene 02-2 HTML 实现

## 全局约定

## 全局约定

- 输出路径命名：`Scene 01-1` -> `compositions/scenes/scene-0101.html`，`Scene 11-2` -> `compositions/scenes/scene-1102.html`。
- 每个 HTML 必须是 1920x1080、16:9 横版、浅色科技背景、技术讲解博主风格。
- 每个 HTML 必须使用 `DESIGN.md` 中的 token：`Background`、`Text Primary`、`Text Secondary`、`Tech Blue`、`Governance Purple`、`AI Orange`、`Risk Red`、`Done Green`、`Warning Yellow`。
- 每个 scene 主视觉元素不得超过 6 个；动画只做主视图内状态变化，不做跨画面入场、大幅旋转、复杂粒子。
- 每个 scene 的字幕是观点字幕，不是口播全文；底部字幕必须清晰可读。
- 每个 scene 完成后需可单独打开对应 HTML 预览，并能按合同时间点完成状态变化。

## Issue 内容
- 任务标题：实现 Scene 02-2 独立 HTML
- 时间：00:36 - 00:48
- 目标：定义版本火车系统是由需求、班次、容量、依赖、变更组成的治理容器。

### 输入

- 合同来源：`scene-contract.md` -> `Scene 02-2`
- 分镜参考：`storyboard.md` -> `Scene 02-2`
- 视觉规范：`DESIGN.md`
- 使用 token：`Background`、`Text Primary`、`Text Secondary`、`Tech Blue`、`Governance Purple`、`AI Orange`
- 画面主体：版本火车车头、五节车厢、DevOps 底座、AI 原生能力层、关键词区、治理主线。
- 必须出现：版本火车；需求、班次、容量、依赖、变更；DevOps 工具链底座；AI 原生能力。
- 动画步骤：
  - 00:36 - 00:40：车头和 DevOps 底座增强对比度，确立治理容器主体。
  - 00:40 - 00:44：需求、班次、容量、依赖、变更五节车厢按顺序点亮。
  - 00:44 - 00:48：`AI Orange` 能力层覆盖车厢顶部，表示 AI 原生能力贯穿系统。
- 字幕：补齐需求治理和协同工具链短板；需求治理｜协同工具链｜AI 原生。
- 禁止事项：禁止卡通火车；禁止车厢标签缺失；禁止大面积高饱和紫；禁止把 AI 做成泛光效。

### 输出

- HTML 文件：`compositions/scenes/scene-0202.html`
- 文件要求：独立 scene HTML，可被后续总片或预览器加载；样式和动画写在文件内或项目约定的共享资源中。
- 命名要求：不得改名，不得输出到 `scenes/`、`renders/` 或其他目录。

### 验收标准

- `compositions/scenes/scene-0202.html` 文件存在，打开后显示 Scene 02-2。
- 时间点与动画步骤一致：
  - 00:36 - 00:40：车头和 DevOps 底座增强对比度，确立治理容器主体。
  - 00:40 - 00:44：需求、班次、容量、依赖、变更五节车厢按顺序点亮。
  - 00:44 - 00:48：`AI Orange` 能力层覆盖车厢顶部，表示 AI 原生能力贯穿系统。
- scene 主视觉元素不超过 6 个，且包含合同规定的主体：版本火车车头、五节车厢、DevOps 底座、AI 原生能力层、关键词区、治理主线。
- 必须出现内容完整：版本火车；需求、班次、容量、依赖、变更；DevOps 工具链底座；AI 原生能力。
- 字幕准确显示：补齐需求治理和协同工具链短板；需求治理｜协同工具链｜AI 原生。
- 遵守禁止事项：禁止卡通火车；禁止车厢标签缺失；禁止大面积高饱和紫；禁止把 AI 做成泛光效。
- 具体画面验收：五个车厢标签清晰；AI 能力层使用 `AI Orange`；底座和治理容器关系明确。
