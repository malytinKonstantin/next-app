import { ReactNode } from 'react';

interface RenderFunction {
  (): ReactNode;
}

export interface TextRowProps {
  /** Заголовок */
  title: string;

  /** лейбл */
  label?: string;

  /** Текст описания или компонент описания */
  description?: ReactNode | RenderFunction;

  /** Признак неактивности */
  disabled?: boolean;

  /** Признак блочной модели */
  block?: boolean;

  /** Нижний отступ */
  mb?: number;
}
