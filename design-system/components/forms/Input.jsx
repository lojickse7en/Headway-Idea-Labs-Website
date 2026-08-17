import React from 'react';

/** Single-line field. onDark is for the footer newsletter (white fill on brown). */
export function Input({ placeholder, type = 'text', onDark = false, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <input type={type} placeholder={placeholder}
      onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
      style={{
        width:'100%', boxSizing:'border-box', background:'#fff',
        border:onDark ? 'none' : '1px solid ' + (focus ? 'var(--hw-hover-border)' : 'var(--hw-line)'),
        borderRadius:'var(--hw-radius-sm)', padding:'12px 14px',
        fontFamily:'var(--hw-font-body)', fontSize:14, color:'var(--hw-ink)',
        outline:focus ? '2px solid rgba(245,132,31,.35)' : 'none', outlineOffset:1,
        transition:'border-color var(--hw-dur-fast) var(--hw-ease)', ...style
      }} {...rest} />
  );
}
