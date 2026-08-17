import React from 'react';

/** Quiet text CTA with a sliding arrow — the secondary action when a section already has a gradient button. */
export function LinkArrow({ children, href = '#', style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a href={href} style={{
      display:'inline-flex', alignItems:'center', gap:9,
      fontFamily:'var(--hw-font-head)', fontWeight:'var(--hw-w-semibold)', fontSize:15,
      color:'var(--hw-orange)', textDecoration:'none',
      transition:'gap var(--hw-dur-fast) var(--hw-ease)',
      ...(hover ? { gap:14 } : null), ...style
    }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} {...rest}>
      {children}
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </a>
  );
}
