# ai-decision-panel

Reusable AI review and recommendation panel.

## Purpose

Use for AI demand review, intelligent train inclusion, risk explanation, and recommendation summaries.

## Default Structure

```html
<section class="ai-panel">
  <header><span>AI 需求审查</span><b>正在分析</b></header>
  <div class="ai-check-list">
    <article class="ai-check risk">风险点<span>已识别</span></article>
    <article class="ai-check done">验收标准<span>已补全</span></article>
  </div>
</section>
```

## Rules

- AI identity uses `AI Orange`; avoid abstract glowing spheres.
- Every panel must expose the inspected inputs or recommendation reasons.
- Risk and completion states must be visually distinct: red for risk, green for completed, yellow for pending or deferred.
- Keep each reason under two short lines.
- Entrance: panel can enter by scale or y movement; individual checks should stagger in under 500ms total.
- Do not animate text content itself; animate its container or status pill.
