import { CSSProperties } from 'react';

export type IconName = keyof typeof IconNameEnum;

export interface IconProps {
  /** наименование иконки из списка доступных  */
  name: IconName;

  /** ширина иконки */
  width?: number;

  /** высота иконки */
  height?: number;

  /** цвет заливки */
  fill?: string;

  /** дополнительные кастомные стили для иконки */
  iconStyles?: CSSProperties;

  /** бесконечная анимация вращения иконки */
  rotate?: boolean;

  /** Внешний класс для стилей */
  className?: string;

  /** нижний внешний отступ */
  mb?: number;
}

export enum IconNameEnum {
  // flat
  approveTick = 'approveTick',
  closeFill = 'closeFill',
  close = 'close',
  minus = 'minus',
  plus = 'plus',
  research = 'research',
  rightArrow = 'rightArrow',
  spinner = 'spinner',
  warning = 'warning',
  star = 'star',

  // colored
  checkGreen = 'checkGreen',
  closeRed = 'closeRed',
  warningYellow = 'warningYellow',

  // emoji
  sushi = 'sushi',
  pizza = 'pizza',
  hotBeverage = 'hotBeverage',
  hamburger = 'hamburger',
  greenApple = 'greenApple',
  frenchFries = 'frenchFries',
}
