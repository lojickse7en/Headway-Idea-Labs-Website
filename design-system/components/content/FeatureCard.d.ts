import * as React from 'react';

/**
 * Icon-chip feature card, used in 2- and 3-up grids.
 * @startingPoint section="Content" subtitle="Icon chip, title, body — 3-up grid card" viewport="700x260"
 */
export interface FeatureCardProps {
  /** an <svg> or <img> glyph, ~26px */
  icon?: React.ReactNode;
  title: React.ReactNode;
  children?: React.ReactNode;
  /** chip fill — rotate navy / teal / orange across a row */
  chip?: 'navy' | 'teal' | 'orange' | 'soft';
  /** whole card goes light blue on hover */
  hoverFill?: boolean;
  style?: React.CSSProperties;
}
export function FeatureCard(props: FeatureCardProps): JSX.Element;
