import React from 'react';

/** Numbered journey step. featured marks the current stage with an orange frame + badge. */
export function StepCard({ number, title, children, featured = false, badge = 'You are here', style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
      position:'relative',
      background:featured ? 'linear-gradient(180deg,#FFF6EE 0%,#fff 60%)' : '#fff',
      border:featured ? 'var(--hw-border-featured)' : '1px solid transparent',
      borderRadius:'var(--hw-radius-lg)', padding:'28px 30px',
      display:'grid', gridTemplateColumns:'auto 1fr', gap:24, alignItems:'start',
      boxShadow:featured ? '0 18px 44px -20px rgba(245,132,31,.45)'
        : (hover ? '0 18px 44px -22px rgba(14,42,77,.3)' : '0 8px 30px -18px rgba(14,42,77,.22)'),
      transform:hover ? 'translateY(-3px)' : 'none',
      transition:'transform var(--hw-dur) var(--hw-ease), box-shadow var(--hw-dur) var(--hw-ease)', ...style
    }}>
      {featured ? <span style={{
        position:'absolute', top:-12, right:22, backgroundImage:'var(--hw-gradient-button)', color:'#fff',
        fontFamily:'var(--hw-font-head)', fontWeight:'var(--hw-w-bold)', fontSize:11,
        letterSpacing:'.1em', textTransform:'uppercase', padding:'5px 13px', borderRadius:20,
        boxShadow:'0 6px 14px -5px rgba(245,132,31,.6)'
      }}>{badge}</span> : null}
      <div style={{
        width:50, height:50, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center',
        fontFamily:'var(--hw-font-head)', fontWeight:'var(--hw-w-bold)', fontSize:16, color:'#fff',
        background:featured ? undefined : 'var(--hw-navy)',
        backgroundImage:featured ? 'var(--hw-gradient-button)' : undefined,
        boxShadow:featured ? '0 0 0 5px rgba(245,132,31,.16)' : 'none', flex:'none'
      }}>{number}</div>
      <div>
        <h3 style={{
          fontFamily:'var(--hw-font-head)', fontWeight:'var(--hw-w-semibold)', fontSize:19.5,
          color:featured ? 'var(--hw-orange)' : 'var(--hw-navy)', margin:'0 0 9px'
        }}>{title}</h3>
        <p style={{ color:'var(--hw-muted)', fontSize:'var(--hw-text-caption)', lineHeight:'var(--hw-lh-relaxed)', margin:0 }}>
          {children}
        </p>
      </div>
    </div>
  );
}
