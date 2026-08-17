import * as React from 'react';

/**
 * Status / marker pill.
 * @startingPoint section="Content" subtitle="Status pills in four tones" viewport="700x120"
 */
export interface BadgeProps {
  children: React.ReactNode;
  tone?: 'orange' | 'navy' | 'success' | 'soft';
  /** leading dot, e.g. for "Live" */
  dot?: boolean;
  style?: React.CSSProperties;
}
export function Badge(props: BadgeProps): JSX.Element;
