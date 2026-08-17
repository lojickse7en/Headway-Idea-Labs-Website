import * as React from 'react';

/** Text input. */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'style'> {
  placeholder?: string;
  type?: string;
  /** white fill, no border — for the dark footer */
  onDark?: boolean;
  style?: React.CSSProperties;
}
export function Input(props: InputProps): JSX.Element;
