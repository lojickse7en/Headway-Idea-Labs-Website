import * as React from 'react';

/** Secondary text link with a sliding arrow. */
export interface LinkArrowProps {
  children: React.ReactNode;
  href?: string;
  style?: React.CSSProperties;
}
export function LinkArrow(props: LinkArrowProps): JSX.Element;
