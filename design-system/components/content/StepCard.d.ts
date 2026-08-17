import * as React from 'react';

/**
 * Numbered stage in a founder-journey list.
 * @startingPoint section="Content" subtitle="Numbered journey step, with featured state" viewport="700x180"
 */
export interface StepCardProps {
  /** zero-padded, e.g. "03" */
  number: React.ReactNode;
  title: React.ReactNode;
  children?: React.ReactNode;
  /** highlights the stage the current page is about */
  featured?: boolean;
  badge?: string;
  style?: React.CSSProperties;
}
export function StepCard(props: StepCardProps): JSX.Element;
