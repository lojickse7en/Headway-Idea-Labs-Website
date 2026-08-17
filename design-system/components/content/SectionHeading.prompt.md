Opens almost every Headway section. Wrap emphasis words in a span coloured `var(--hw-orange)`.

```jsx
<SectionHeading eyebrow="Why this exists"
  title={<>The missing layer after <span style={{color:'var(--hw-orange)'}}>demo day.</span></>}
  intro="Accelerators often tell founders what to do." align="split" />
```

`align="center"` for card grids; `align="split"` when the intro is long enough to balance the heading.
