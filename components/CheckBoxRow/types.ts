import { PriceTextProps } from '@/ui-kit';
import { CheckBoxProps } from '@/ui-kit/Checkbox/types';

export interface CheckBoxRowProps {
  /** Свойства чекбокса */
  checkBoxProps: CheckBoxProps;

  /** Цена */
  price?: string;

  /** Свойства цены */
  priceTextProps?: PriceTextProps;

  /** Признак блочной модели */
  block?: boolean;

  /** Нижний отступ */
  mb?: number;
}
