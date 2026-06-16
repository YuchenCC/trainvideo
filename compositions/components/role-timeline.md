# role-timeline

Reusable role card and offset timeline pattern.

## Purpose

Use to show four collaboration roles that should align but drift apart over time.

## Default Structure

```html
<div class="role-timeline">
  <article class="role-card"><strong>业务</strong><span>提出需求</span></article>
  <div class="timeline-line"><i></i><i></i><i></i></div>
</div>
```

## Rules

- Role set is fixed to four categories unless the contract says otherwise: 业务、研发、测试、投产。
- Keep timelines readable: one horizontal line per role, 3-4 milestone dots.
- Offset motion uses transform `x`, not layout properties.
- Risk state changes line color to `#EF4444`; normal state uses `#2563EB`.
- Avoid making the timelines so tangled that the role order becomes unreadable.
