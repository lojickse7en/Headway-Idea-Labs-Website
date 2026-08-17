import * as React from 'react';

/**
 * Capability chip.
 * @startingPoint section="Content" subtitle="Wrapping row of capability chips" viewport="700x140"
 */
export interface PillProps {
  children: React.ReactNode;
  /** small gradient dot on the left */
  dot?: boolean;
  style?: React.CSSProperties;
}
export function Pill(props: PillProps): JSX.Element;
