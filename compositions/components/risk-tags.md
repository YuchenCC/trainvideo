# risk-tags

Reusable label pattern for risk, keyword, and result states.

## Purpose

Use for short decision labels such as `零散沟通`, `版本冲突`, `风险失控`, and `问题难追溯`.

## Default Structure

```html
<span class="status-tag risk">风险失控</span>
```

## Rules

- Text length: 2-6 Chinese characters whenever possible.
- Border radius: `8px` maximum.
- Minimum height: `48px`; font size `24px` or larger.
- Color roles:
  - `.risk`: `#EF4444`
  - `.warning`: `#FACC15`
  - `.done`: `#22C55E`
  - `.blue`: `#2563EB`
- Entrance: short scale or y entrance; avoid bouncing labels across the canvas.
