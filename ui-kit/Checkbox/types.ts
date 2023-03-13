import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CheckBoxProps
  extends Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
    'onChange'
  > {
  /** Подпись чекбокса */
  label: string;

  /** Признак промежуточного выбора, когда выбраны не все чекбоксы в группе */
  indeterminate?: boolean;

  /** Признак неактивного чекбокса */
  disabled?: boolean;

  /** Состояние чекбокса */
  checked?: boolean;

  /** Признак ошибки в чекбоксе */
  error?: boolean;

  /** Коллбек, будет вызван при изменении чекбокса */
  onChange?: (value: boolean) => void;

  /** Признак блочной модели */
  block?: boolean;

  /** Нижний отступ */
  mb?: number;
}
