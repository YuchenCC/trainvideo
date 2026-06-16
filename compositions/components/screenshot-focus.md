# screenshot-focus

Reusable screenshot evidence frame with one or two animated focus boxes.

## Purpose

Use when a scene needs to prove a mechanism with real product UI while keeping the viewer focused on a small readable area.

## Default Structure

```html
<div class="screenshot-focus">
  <img src="assets/screenshots/raw/SceneXX.png" alt="产品界面">
  <div class="focus-box"></div>
  <div class="focus-label">容量区域</div>
</div>
```

## Rules

- Use processed screenshots first when available; raw screenshots are acceptable fallback evidence.
- Keep the frame radius at `8px` or less.
- Show no more than two focus boxes at the same time.
- Use `Tech Blue` for normal capability, `AI Orange` for AI reasoning, `Risk Red` for blocking risk, and `Done Green` for confirmed result.
- Entrance: screenshot frame enters once; focus boxes may fade or move between evidence zones.
- Avoid scaling the image after it is visible; animate the focus layer instead.
