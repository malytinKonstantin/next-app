export type SwitcherProps = {
  /** Подпись */
  label?: string;

  /** Признак активного свитчера */
  checked?: boolean;

  /** Признак неактивного свитчера */
  disabled?: boolean;

  /** Нижний отступ */
  mb?: number;

  /** Коллбек который буудет вызван при изменении */
  onChange?: (value: boolean) => void;
};
