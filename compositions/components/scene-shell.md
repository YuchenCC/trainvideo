# scene-shell

Reusable scene shell for the light technical explainer style.

## Purpose

Use for 1920x1080 chapter scenes that need a consistent canvas, top chapter label, safe content padding, and bottom opinion subtitle.

## Default Structure

```html
<section class="clip scene scene-shell" data-start="0" data-duration="6" data-track-index="1">
  <div class="scene-bg" data-layout-ignore></div>
  <div class="scene-kicker">Scene 01</div>
  <div class="scene-body">...</div>
  <div class="bottom-subtitle">观点字幕</div>
</section>
```

## Rules

- Canvas: `1920x1080`, light background from `DESIGN.md`: `#F8FAFC`, `#F3F4F6`, `#E5E7EB`.
- Safe padding: `72px 104px 86px`.
- Body uses flex/grid layout; decorative grid, glow, and connector layers may be absolute.
- Bottom subtitle should stay above `72px` from bottom and use `32px` or larger text.
- Entrance: scene label, main content, and subtitle each get their own `gsap.from()` entrance.
