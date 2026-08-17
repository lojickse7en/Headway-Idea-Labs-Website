import React from 'react';

/** Rounded capability chip with a gradient dot. Used in wrapping, centered rows. */
export function Pill({ children, dot = true, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <span onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
      display:'inline-flex', alignItems:'center', gap:11,
      background:'#fff', border:'1px solid ' + (hover ? '#F3C79A' : '#F0E3D6'),
      borderRadius:'var(--hw-radius-pill)', padding:'14px 24px',
      fontFamily:'var(--hw-font-head)', fontWeight:'var(--hw-w-semibold)', fontSize:15,
      color:'var(--hw-navy)',
      boxShadow:hover ? 'var(--hw-glow-pill)' : 'var(--hw-shadow-pill)',
      transform:hover ? 'translateY(-2px)' : 'none',
      transition:'all var(--hw-dur-fast) var(--hw-ease)', ...style
    }}>
      {dot ? <span style={{ width:9, height:9, borderRadius:'50%', backgroundImage:'var(--hw-gradient-button)', flex:'none' }} /> : null}
      {children}
    </span>
  );
}
