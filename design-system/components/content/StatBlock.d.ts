import * as React from 'react';

/**
 * Headline metric with a gradient numeral.
 * @startingPoint section="Content" subtitle="Gradient stat tiles, light or on dark" viewport="700x150"
 */
export interface StatBlockProps {
  /** e.g. "200,000+" */
  value: React.ReactNode;
  label: React.ReactNode;
  /** styling for the dark navy band */
  onDark?: boolean;
  style?: React.CSSProperties;
}
export function StatBlock(props: StatBlockProps): JSX.Element;
