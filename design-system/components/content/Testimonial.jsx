import React from 'react';

/** Founder quote with avatar, name and role. */
export function Testimonial({ quote, name, role, avatar, style }) {
  return (
    <div style={{
      background:'#fff', border:'1px solid var(--hw-line)', borderRadius:'var(--hw-radius-card)',
      padding:'32px 30px', boxShadow:'var(--hw-shadow-card)', display:'flex',
      flexDirection:'column', gap:22, ...style
    }}>
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--hw-orange)"
        strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
        <path d="M9 11H5a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v8a4 4 0 0 1-4 4" />
        <path d="M19 11h-4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v8a4 4 0 0 1-4 4" />
      </svg>
      <p style={{ color:'var(--hw-ink)', fontSize:'var(--hw-text-body-sm)', lineHeight:'var(--hw-lh-body)', margin:0, flex:1 }}>
        {quote}
      </p>
      <div style={{ display:'flex', alignItems:'center', gap:13 }}>
        {avatar ? <img src={avatar} alt="" style={{ width:46, height:46, borderRadius:'50%', objectFit:'cover', flex:'none' }} />
          : <div style={{ width:46, height:46, borderRadius:'50%', background:'var(--hw-surface-blue)', flex:'none' }} />}
        <div>
          <div style={{ fontFamily:'var(--hw-font-head)', fontWeight:'var(--hw-w-semibold)', fontSize:15, color:'var(--hw-navy)' }}>{name}</div>
          <div style={{ fontSize:13, color:'var(--hw-muted)' }}>{role}</div>
        </div>
      </div>
    </div>
  );
}
