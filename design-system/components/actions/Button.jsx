import React from 'react';

const base = {
  display:'inline-flex', alignItems:'center', justifyContent:'center', gap:8,
  fontFamily:'var(--hw-font-head)', fontWeight:'var(--hw-w-semibold)',
  border:'none', cursor:'pointer', textDecoration:'none',
  transition:'transform var(--hw-dur-fast) var(--hw-ease), box-shadow var(--hw-dur-fast) var(--hw-ease)',
  borderRadius:'var(--hw-radius-sm)', boxSizing:'border-box'
};

const sizes = {
  sm:{ fontSize:14, padding:'10px 20px' },
  md:{ fontSize:15, padding:'13px 26px' },
  lg:{ fontSize:16, padding:'16px 32px' }
};

const variants = {
  primary:{ backgroundImage:'var(--hw-gradient-button)', color:'#fff' },
  outline:{ background:'transparent', color:'#fff', border:'1.5px solid rgba(255,255,255,.7)' },
  outlineNavy:{ background:'transparent', color:'var(--hw-navy)', border:'1.5px solid var(--hw-line)' },
  slate:{ background:'var(--hw-slate)', color:'#fff' }
};

/**
 * Headway primary action. The orange gradient NEVER changes on hover —
 * hover adds the signature glow plus a 2px lift.
 */
export function Button({ children, variant = 'primary', size = 'md', href, disabled, onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const isPrimary = variant === 'primary';
  const s = {
    ...base, ...sizes[size], ...variants[variant],
    opacity: disabled ? .5 : 1,
    pointerEvents: disabled ? 'none' : 'auto',
    transform: hover && !disabled ? 'translateY(var(--hw-lift))' : 'none',
    boxShadow: hover && !disabled && isPrimary ? 'var(--hw-glow-button)' : 'none',
    ...(hover && !disabled && variant === 'outline' ? { background:'rgba(255,255,255,.12)', borderColor:'#fff' } : null),
    ...style
  };
  const Tag = href ? 'a' : 'button';
  return (
    <Tag href={href} onClick={onClick} style={s} disabled={Tag === 'button' ? disabled : undefined}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} {...rest}>
      {children}
    </Tag>
  );
}
