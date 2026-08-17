import * as React from 'react';

/**
 * Section header — eyebrow, H2, optional intro paragraph.
 * @startingPoint section="Content" subtitle="Centered or split section header" viewport="700x200"
 */
export interface SectionHeadingProps {
  /** Small orange uppercase label, e.g. "Why this exists" */
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  /** center (default) or split — heading left, intro right */
  align?: 'center' | 'split';
  style?: React.CSSProperties;
}
export function SectionHeading(props: SectionHeadingProps): JSX.Element;
