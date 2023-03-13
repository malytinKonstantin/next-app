import { ReactNode } from 'react';
import { SwitcherProps } from '@/ui-kit/Switcher/types';

interface RenderFunction {
  (): ReactNode;
}

export interface SwitcherRowProps {
  /** Заголовок */
  title: string;

  /** Свойства свитчера */
  switcherProps?: SwitcherProps;

  /** Текст описания или компонент описания */
  description?: ReactNode | RenderFunction;

  /** Признак блочной модели */
  block?: boolean;

  /** Нижний отступ */
  mb?: number;
}
