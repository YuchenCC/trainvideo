# info-node

Reusable lightweight information node for system, requirement, testing, release, and chat icons.

## Purpose

Use when a scene needs readable business information icons without importing external assets.

## Default Structure

```html
<div class="info-node info-node-blue">
  <span class="node-icon">SYS</span>
  <strong>系统</strong>
  <small>多系统协同</small>
</div>
```

## Rules

- Default size: `190px x 112px`.
- Border radius: `8px` maximum.
- Use short labels: title under 6 Chinese characters, description under 10 Chinese characters.
- Color roles:
  - Blue: normal systems and flow capability.
  - Red: conflict, risk, warning escalation.
  - Yellow: pending/manual judgment.
- Entrance: use `opacity + y/x/scale`, not rotation-heavy motion.
- Highlight: prefer border/background color shift and subtle `y` movement.
