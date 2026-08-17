import React from 'react';

/** Eyebrow + H2 + optional intro. align="split" puts the heading left and the intro right. */
export function SectionHeading({ eyebrow, title, intro, align = 'center', style }) {
  const isSplit = align === 'split';
  const head = (
    <div>
      {eyebrow ? <span style={{
        display:'inline-block', fontFamily:'var(--hw-font-head)', fontWeight:'var(--hw-w-bold)',
        fontSize:'var(--hw-text-eyebrow)', letterSpacing:'var(--hw-track-eyebrow)',
        textTransform:'uppercase', color:'var(--hw-orange)', marginBottom:14
      }}>{eyebrow}</span> : null}
      <h2 style={{
        fontFamily:'var(--hw-font-head)', fontWeight:'var(--hw-w-bold)',
        fontSize:isSplit ? 'var(--hw-text-h2-sm)' : 'var(--hw-text-h2)',
        color:'var(--hw-navy)', lineHeight:'var(--hw-lh-heading)',
        letterSpacing:'var(--hw-track-heading)', margin:0
      }}>{title}</h2>
    </div>
  );
  const body = intro ? <p style={{
    color:'var(--hw-muted)', fontSize:'var(--hw-text-body)', margin:isSplit ? 0 : '14px auto 0',
    maxWidth:isSplit ? 'none' : 620, lineHeight:'var(--hw-lh-body)'
  }}>{intro}</p> : null;

  if (isSplit) return (
    <div style={{ display:'grid', gridTemplateColumns:'1.1fr 1fr', gap:'var(--hw-split-gap)', alignItems:'end', ...style }}>
      {head}{body}
    </div>
  );
  return <div style={{ textAlign:'center', maxWidth:760, margin:'0 auto', ...style }}>{head}{body}</div>;
}
