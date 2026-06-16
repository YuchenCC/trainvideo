# ai-native-loop

Reusable AI-native研发过程闭环 component for process, asset, quality, and verification scenes.

## Purpose

Use when explaining that AI is not a single product feature but a reconstruction of研发过程 around process, assets, context, and quality closure.

## Default Structure

```html
<div class="ai-native-loop">
  <article class="loop-node process">过程</article>
  <article class="loop-node asset">资产</article>
  <article class="loop-node quality">质量闭环</article>
  <div class="loop-ring"></div>
</div>
```

## Rules

- Keep the core loop to three nodes: 过程、资产、质量闭环.
- Use `Governance Purple` for the system frame, `AI Orange` for Agent or AI Skills, and `Done Green` for confirmed quality states.
- Labels must stay under 6 Chinese characters; supporting copy should stay under 10 Chinese characters.
- Entrance: loop nodes enter by `scale + opacity`, connectors draw with `scaleX` or `stroke-dashoffset`.
- Do not present AI native研发 as a single model button or isolated assistant bubble.
