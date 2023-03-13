import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ComponentSize } from '@/ui-kit/@types';

export type PriceTextSize = 'extra-small' | keyof typeof ComponentSize;

export interface PriceTextProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  /** подчеркнутый текст */
  underline?: boolean;

  /** зачеркнутый текст */
  deleted?: boolean;

  /** блочный элемент (display: block) */
  block?: boolean;

  /** размер текста */
  size?: PriceTextSize;

  /** выравнивание загодовка */
  align?: 'left' | 'center' | 'right';

  /** валюта */
  currency?: string;
}
