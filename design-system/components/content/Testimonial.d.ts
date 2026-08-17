import * as React from 'react';

/**
 * Founder / partner quote card.
 * @startingPoint section="Content" subtitle="Quote with avatar, name, role" viewport="700x280"
 */
export interface TestimonialProps {
  quote: React.ReactNode;
  name: string;
  role: string;
  /** headshot URL; omit for a neutral placeholder circle */
  avatar?: string;
  style?: React.CSSProperties;
}
export function Testimonial(props: TestimonialProps): JSX.Element;
