import { ReactNode } from 'react';

export const enum InfoType {
  info = 'info',
  neutral = 'neutral',
  positive = 'positive',
  warning = 'warning',
  negative = 'negative',
}

interface RenderFunction {
  (): ReactNode;
}

export interface InfoProps {
  /** Заголовок */
  title: string;

  /** Текст описания или компонент описания */
  description?: ReactNode | RenderFunction;

  /** Нижний отступ */
  mb?: number;

  /** Признак блочной модели */
  block?: boolean;

  /** Тип информации */
  type?: keyof typeof InfoType;
}
