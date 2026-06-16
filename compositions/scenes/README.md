# Scene Compositions

这里放分章子合成。推荐每章一个 HTML：

```text
chapter-01-release-chaos.html
chapter-02-bizdevops-train.html
chapter-03-demand-pool.html
```

每个子合成必须：

- 使用 `<template>` 包裹。
- 注册 `window.__timelines["chapter-id"]`。
- 保持 1920x1080。
- 使用 `DESIGN.md` 的色彩和字体。
- 遵循“问题 -> 机制 -> 截图证明 -> 结论”。
- 被 `index.html` 通过 `data-composition-src` 装配。
