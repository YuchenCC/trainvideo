# train-schedule-rail

Reusable rail and station pattern for version train scheduling scenes.

## Purpose

Use when explaining班次, key release nodes, train cars, capacity, and snapshots.

## Default Structure

```html
<div class="schedule-rail">
  <div class="rail-line"></div>
  <div class="station">需求评审</div>
  <div class="station">纳版</div>
  <div class="train-car">需求车厢</div>
</div>
```

## Rules

- Station order must stay readable: 需求评审、纳版、SIT、UAT、封板、投产.
- Use rail/car metaphors as simplified diagrams, not realistic railway illustration.
- Bindings such as 关联系统、研发容量、关键节点、版本快照 should appear as short tags connected to the rail.
- Use `Tech Blue` for active rails, `Governance Purple` for governance structure, and `Done Green` for confirmed nodes.
- Entrance: rail draws with `scaleX`; stations can enter by opacity and small y movement.
