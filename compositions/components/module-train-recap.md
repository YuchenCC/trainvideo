# module-train-recap

Reusable ending recap pattern that turns chapter modules into simplified version-train cars.

## Purpose

Use for final recap scenes where many previous modules must remain identifiable without replaying detailed screenshots.

## Default Structure

```html
<div class="module-train">
  <div class="recap-rail"></div>
  <article class="module-car">混乱发布</article>
  <article class="module-car">版本火车</article>
  <article class="terminal">AI 原生治理</article>
</div>
```

## Rules

- The recap can show up to 8 cars, but each car label must be short and readable at 1920x1080.
- Use sequence, car number, and color role instead of detailed UI screenshots to avoid overload.
- Terminal station text must be larger than car labels and must use `Governance Purple` or `Done Green`.
- Entrance: rail draws first, cars stagger in under 700ms total, terminal arrives last.
- Do not change the module order during recap.
