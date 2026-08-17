import * as React from 'react';

/**
 * Primary Headway action button.
 * @startingPoint section="Actions" subtitle="Gradient CTA with the signature hover glow" viewport="700x140"
 */
export interface ButtonProps {
  children: React.ReactNode;
  /** primary = orange gradient; outline = for dark bands; outlineNavy = on light; slate = footer newsletter */
  variant?: 'primary' | 'outline' | 'outlineNavy' | 'slate';
  size?: 'sm' | 'md' | 'lg';
  /** renders an <a> instead of a <button> */
  href?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export function Button(props: ButtonProps): JSX.Element;
