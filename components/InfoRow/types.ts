import { ReactNode } from 'react';
import { IconProps } from '@/ui-kit';
import { ActionProps } from '@/ui-kit/base';

interface RenderFunction {
  (): ReactNode;
}

export interface InfoRowProps {
  /** Заголовок */
  title: string;

  /** Свойства кнопки действия */
  actionProps?: ActionProps;

  /** Признак неактивности */
  disabled?: boolean;

  /** Текст описания или компонент описания */
  description?: ReactNode | RenderFunction;

  /** Свойства иконки */
  iconProps?: IconProps;

  /** Признак блочной модели */
  block?: boolean;

  /** Нижний отступ */
  mb?: number;
}
