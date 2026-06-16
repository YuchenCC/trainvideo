# Issue 35 | Scene 11-2 HTML 实现

## 全局约定

## 全局约定

- 输出路径命名：`Scene 01-1` -> `compositions/scenes/scene-0101.html`，`Scene 11-2` -> `compositions/scenes/scene-1102.html`。
- 每个 HTML 必须是 1920x1080、16:9 横版、浅色科技背景、技术讲解博主风格。
- 每个 HTML 必须使用 `DESIGN.md` 中的 token：`Background`、`Text Primary`、`Text Secondary`、`Tech Blue`、`Governance Purple`、`AI Orange`、`Risk Red`、`Done Green`、`Warning Yellow`。
- 每个 scene 主视觉元素不得超过 6 个；动画只做主视图内状态变化，不做跨画面入场、大幅旋转、复杂粒子。
- 每个 scene 的字幕是观点字幕，不是口播全文；底部字幕必须清晰可读。
- 每个 scene 完成后需可单独打开对应 HTML 预览，并能按合同时间点完成状态变化。

## Issue 内容
- 任务标题：实现 Scene 11-2 独立 HTML
- 时间：04:54 - 04:57
- 目标：最终定格，完成“从经验协同，到 AI 原生治理”的价值表达。

### 输入

- 合同来源：`scene-contract.md` -> `Scene 11-2`
- 分镜参考：`storyboard.md` -> `Scene 11-2`
- 视觉规范：`DESIGN.md`
- 使用 token：`Background`、`Text Primary`、`Text Secondary`、`Governance Purple`、`Tech Blue`、`Done Green`
- 画面主体：版本火车、终点站、最终金句、系统名称、三关键词标签、稳定背景轨道。
- 必须出现：AI 原生治理；从经验协同，到 AI 原生治理；AI 原生 BizDevOps 版本火车系统；可解释、可确认、可审计。
- 动画步骤：
  - 04:54 - 04:55：终点站亮起，版本火车状态从运行切换为抵达。
  - 04:55 - 04:56：最终金句居中，可解释、可确认、可审计三个关键词确认。
  - 04:56 - 04:57：背景轨道和车厢降低对比度，系统名称保持清晰并定格。
- 字幕：从经验协同，到 AI 原生治理；可解释｜可确认｜可审计；AI 原生 BizDevOps 版本火车系统。
- 禁止事项：禁止结尾再加入新概念；禁止终点站文字不清；禁止系统名称被压到角落。

### 输出

- HTML 文件：`compositions/scenes/scene-1102.html`
- 文件要求：独立 scene HTML，可被后续总片或预览器加载；样式和动画写在文件内或项目约定的共享资源中。
- 命名要求：不得改名，不得输出到 `scenes/`、`renders/` 或其他目录。

### 验收标准

- `compositions/scenes/scene-1102.html` 文件存在，打开后显示 Scene 11-2。
- 时间点与动画步骤一致：
  - 04:54 - 04:55：终点站亮起，版本火车状态从运行切换为抵达。
  - 04:55 - 04:56：最终金句居中，可解释、可确认、可审计三个关键词确认。
  - 04:56 - 04:57：背景轨道和车厢降低对比度，系统名称保持清晰并定格。
- scene 主视觉元素不超过 6 个，且包含合同规定的主体：版本火车、终点站、最终金句、系统名称、三关键词标签、稳定背景轨道。
- 必须出现内容完整：AI 原生治理；从经验协同，到 AI 原生治理；AI 原生 BizDevOps 版本火车系统；可解释、可确认、可审计。
- 字幕准确显示：从经验协同，到 AI 原生治理；可解释｜可确认｜可审计；AI 原生 BizDevOps 版本火车系统。
- 遵守禁止事项：禁止结尾再加入新概念；禁止终点站文字不清；禁止系统名称被压到角落。
- 具体画面验收：最终金句居中且可读；三关键词不超过一行；最后 0.5 秒画面稳定。
