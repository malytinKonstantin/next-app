import { CSSProperties, ReactNode } from 'react';
import { Theme } from '@emotion/react';

export enum ValidationStatus {
  error = 'error',
  success = 'success',
}

export interface Validation {
  status: keyof typeof ValidationStatus;
  message: string;
}

export interface InputBaseProps {
  /** id для Input и label */
  id?: string;

  /** disabled */
  disabled?: boolean;

  /** label для Input */
  label?: string;

  /** обязательный Input */
  required?: boolean;

  helpMessage?: string;

  /** валидация */
  validation?: Validation;

  /** дополнительные стили */
  style?: CSSProperties;

  /** нижний отступ */
  mb?: number;

  children?: ReactNode;

  theme?: Theme;
}
