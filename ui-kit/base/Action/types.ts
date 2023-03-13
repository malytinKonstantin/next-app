import { ComponentSize } from '@/ui-kit/@types';
import { SyntheticEvent } from 'react';

export interface ActionProps {
  /** Лейбл */
  label: string;

  /** размер кнопки */
  size?: keyof typeof ComponentSize;

  /** Признак неактивного */
  disabled?: boolean;

  /** нижний отступ */
  mb?: number;

  /** Действие на клик */
  onClick(e: SyntheticEvent<HTMLButtonElement>): void;
}
