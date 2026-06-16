# HyperFrames Authoring Standard

## Root Composition

`index.html` 是根合成，直接在 `<body>` 中放置 `data-composition-id="main"` 的容器。根合成不使用 `<template>`。

```html
<div id="root" data-composition-id="main" data-start="0" data-duration="300" data-width="1920" data-height="1080">
  <div
    id="chapter-01"
    class="clip"
    data-composition-id="chapter-01-release-chaos"
    data-composition-src="compositions/scenes/chapter-01-release-chaos.html"
    data-start="0"
    data-duration="20"
    data-track-index="1"
  ></div>
</div>
```

## Sub-Composition

子合成文件放在 `compositions/scenes/`，必须使用 `<template>` 包裹。

```html
<template id="chapter-01-release-chaos-template">
  <div data-composition-id="chapter-01-release-chaos" data-width="1920" data-height="1080">
    <section class="clip scene-content" data-start="0" data-duration="20" data-track-index="1">
      <h1 id="c01-title">多系统发布，为什么会失控？</h1>
    </section>
    <style>
      [data-composition-id="chapter-01-release-chaos"] {
        width: 1920px;
        height: 1080px;
        overflow: hidden;
        background: #f8fafc;
      }
    </style>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/gsap.min.js"></script>
    <script>
      window.__timelines = window.__timelines || {};
      const tl = gsap.timeline({ paused: true });
      tl.from("#c01-title", { opacity: 0, y: 40, duration: 0.6, ease: "power3.out" }, 0.2);
      window.__timelines["chapter-01-release-chaos"] = tl;
    </script>
  </div>
</template>
```

## Layout Before Animation

- 先写每个场景最完整、最清晰的静态布局。
- `.scene-content` 填满画面，使用 `width: 100%; height: 100%; padding: ...; display: flex; gap: ...; box-sizing: border-box;`。
- 内容主体不要用 `position: absolute; top: ...` 硬摆。
- 只把装饰线、背景网格、光标、高亮层放到 absolute。
- 入口动画用 `gsap.from()`，从不可见或偏移状态进入 CSS 定义的位置。

## Scene Transitions

- 多场景合成必须有转场。
- 每个场景都要有入口动画。
- 除最终场景外，不做提前退出动画；转场负责离开。
- 最终场景可以淡出到结束。

## Motion Guardrails

- 第一段动画从 0.1 到 0.3 秒后开始。
- 同一场景入口动画至少使用 3 种 ease，避免所有元素同样飞入。
- 不使用 `repeat: -1`，循环必须按时长计算有限次数。
- 不动画 `display`、`visibility`、视频元素尺寸。
- 不在 timeline 外控制媒体播放。
- 不用 `<br>` 强制换行，使用 `max-width` 让文本自然换行。

## Screenshot Callouts

- 背景截图透明度建议 0.18 到 0.45。
- 局部放大框用于评委必须看清的字段。
- 高亮框 2 到 3px。
- 同屏最多 1 到 2 个高亮重点。
- 截图层不要盖住底部结论字幕。

## Checks

```bash
npm run lint
npm run validate
npm run inspect
```

重大动画调整后，额外运行：

```bash
npm run snapshot
```
