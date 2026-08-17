import React from 'react';

/** Big gradient number + label. Use on dark bands (onDark) or light tinted tiles. */
export function StatBlock({ value, label, onDark = false, style }) {
  return (
    <div style={{
      background:onDark ? 'rgba(255,255,255,.05)' : 'var(--hw-surface-blue)',
      border:onDark ? '1px solid rgba(255,255,255,.1)' : '1px solid transparent',
      borderRadius:'var(--hw-radius-lg)', padding:onDark ? '32px 28px' : '26px', ...style
    }}>
      <div style={{
        fontFamily:'var(--hw-font-head)', fontWeight:'var(--hw-w-extrabold)',
        fontSize:'var(--hw-text-stat)', lineHeight:1, marginBottom:12,
        backgroundImage:'var(--hw-gradient-button)', WebkitBackgroundClip:'text',
        backgroundClip:'text', color:'transparent'
      }}>{value}</div>
      <div style={{ fontSize:14, lineHeight:1.45, color:onDark ? '#C4CFDB' : 'var(--hw-muted)' }}>{label}</div>
    </div>
  );
}
