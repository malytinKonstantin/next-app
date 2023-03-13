import { SyntheticEvent } from 'react';

export type RadioProps = {
  /** Подпись */
  label?: string;

  /** Признак неактивного радио элемента */
  disabled?: boolean;

  /** Состояние чекбокса */
  checked?: boolean;

  /** Признак ошибки в радио */
  error?: boolean;

  /** Коллбек, будет вызван при изменении выбора */
  onChange: (value: SyntheticEvent<HTMLInputElement>) => void;

  /** Нижний отступ */
  mb?: number;
};
