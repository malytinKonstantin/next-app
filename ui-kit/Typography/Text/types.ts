import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ComponentSize } from '@/ui-kit/@types';

export type TextSize = Exclude<keyof typeof ComponentSize, 'large'>;

export interface TextProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  /** подчеркнутый текст */
  underline?: boolean;

  /** зачеркнутый текст */
  deleted?: boolean;

  /** полужирный текст */
  strong?: boolean;

  /** блочный элемент (display: block) */
  block?: boolean;

  /** размер текста */
  size?: TextSize;

  /** выравнивание загодовка */
  align?: 'left' | 'center' | 'right';
}
