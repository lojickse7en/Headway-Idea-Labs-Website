import React from 'react';

const tones = {
  orange:{ backgroundImage:'var(--hw-gradient-button)', color:'#fff' },
  navy:{ background:'var(--hw-navy)', color:'#fff' },
  success:{ background:'var(--hw-success-bg)', color:'var(--hw-success)' },
  soft:{ background:'var(--hw-orange-bg)', color:'var(--hw-orange)' }
};

/** Small uppercase status pill. */
export function Badge({ children, tone = 'orange', dot = false, style }) {
  return (
    <span style={{
      display:'inline-flex', alignItems:'center', gap:7,
      fontFamily:'var(--hw-font-head)', fontWeight:'var(--hw-w-semibold)', fontSize:11.5,
      letterSpacing:'.06em', textTransform:'uppercase', padding:'6px 12px',
      borderRadius:30, ...tones[tone], ...style
    }}>
      {dot ? <span style={{ width:7, height:7, borderRadius:'50%', background:'currentColor' }} /> : null}
      {children}
    </span>
  );
}
