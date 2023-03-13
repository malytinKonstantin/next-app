import { ReactNode, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import { IconProps, IconName } from '@/ui-kit/Icon';
import { ComponentSize } from '@/ui-kit/@types';

export enum ButtonType {
  primary = 'primary',
  secondary = 'secondary',
  ghost = 'ghost',
  danger = 'danger',
}

export interface ButtonProps
  extends Omit<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    'type'
  > {
  /** тип кнопки */
  type?: keyof typeof ButtonType;

  /** размер кнопки */
  size?: keyof typeof ComponentSize;

  /** обработчик события клика */
  onClick?: () => void;

  /** дочерний React Component */
  children: ReactNode;

  /**
   * если true компонент ведет себя как block и занимает всю ширину контейнера
   * если false ведет себя как inline
   */
  block?: boolean;

  /** если true то в левой части кнопки появится иконка крутящегося спинера */
  loading?: boolean;

  /** блокировка кнопки, игнорирует клики */
  disabled?: boolean;

  /** внешний отступ снизу */
  mb?: number;

  /** параметр иконки из библиотеки  */
  icon?: IconName;

  /** дополнительная стилизация иконки */
  iconProps?: IconProps;
}
