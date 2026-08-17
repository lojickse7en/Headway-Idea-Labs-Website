import React from 'react';

const chipColors = {
  navy:{ background:'var(--hw-navy)' },
  teal:{ background:'var(--hw-teal)' },
  orange:{ backgroundImage:'var(--hw-gradient-button)' },
  soft:{ background:'var(--hw-orange-bg)' }
};

/** Icon chip + title + body. hoverFill turns the whole card light blue (the site's framework-card behaviour). */
export function FeatureCard({ icon, title, children, chip = 'navy', hoverFill = false, style }) {
  const [hover, setHover] = React.useState(false);
  const soft = chip === 'soft';
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
      background:hover && hoverFill ? 'var(--hw-hover-fill)' : 'var(--hw-surface-card)',
      border:'1px solid ' + (hover && hoverFill ? 'var(--hw-hover-border)' : 'var(--hw-line)'),
      borderRadius:'var(--hw-radius-card)', padding:'34px 30px',
      boxShadow:hover ? 'var(--hw-shadow-card-hover)' : 'var(--hw-shadow-card)',
      transform:hover ? 'translateY(var(--hw-lift-card))' : 'none',
      transition:'all var(--hw-dur) var(--hw-ease)', ...style
    }}>
      <div style={{
        width:soft ? 60 : 56, height:soft ? 60 : 56,
        borderRadius:soft ? '50%' : 14,
        display:'flex', alignItems:'center', justifyContent:'center', marginBottom:22,
        color:soft ? 'var(--hw-orange)' : '#fff', ...chipColors[chip]
      }}>{icon}</div>
      <h3 style={{
        fontFamily:'var(--hw-font-head)', fontWeight:'var(--hw-w-semibold)', fontSize:'var(--hw-text-h3)',
        color:'var(--hw-navy)', margin:'0 0 12px', lineHeight:'var(--hw-lh-heading)'
      }}>{title}</h3>
      <p style={{ color:'var(--hw-muted)', fontSize:'var(--hw-text-caption)', lineHeight:'var(--hw-lh-relaxed)', margin:0 }}>
        {children}
      </p>
    </div>
  );
}
