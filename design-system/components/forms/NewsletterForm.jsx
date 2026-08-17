import React from 'react';
import { Input } from './Input.jsx';
import { Button } from '../actions/Button.jsx';

/** Footer newsletter block — heading, blurb, inline email + Sign Up. */
export function NewsletterForm({ heading = 'Subscribe to Our Newsletter', blurb, cta = 'Sign Up', style }) {
  return (
    <div style={style}>
      <h4 style={{
        fontFamily:'var(--hw-font-head)', fontWeight:'var(--hw-w-semibold)', fontSize:17,
        color:'#fff', margin:'0 0 12px'
      }}>{heading}</h4>
      {blurb ? <p style={{ fontSize:14, color:'rgba(255,255,255,.62)', margin:'0 0 18px', lineHeight:'var(--hw-lh-body)' }}>{blurb}</p> : null}
      <form onSubmit={(e) => e.preventDefault()} style={{ display:'flex', gap:10 }}>
        <Input type="email" placeholder="Enter your email" onDark aria-label="Email" />
        <Button variant="slate" size="sm" style={{ flex:'none' }}>{cta}</Button>
      </form>
    </div>
  );
}
