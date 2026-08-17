import * as React from 'react';

/**
 * Footer newsletter signup.
 * @startingPoint section="Forms" subtitle="Footer newsletter signup on dark" viewport="700x220"
 */
export interface NewsletterFormProps {
  heading?: string;
  blurb?: React.ReactNode;
  cta?: string;
  style?: React.CSSProperties;
}
export function NewsletterForm(props: NewsletterFormProps): JSX.Element;
