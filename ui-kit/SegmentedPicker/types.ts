export type SegmentedPickerValue = string | number;

export const enum JustifyType {
  even = 'even',
  content = 'content',
}

export interface SegmentedPickerItem {
  /** подпись кнопки */
  label: string;

  /** значение кнопки */
  value: SegmentedPickerValue;

  /** Признак заблокированого сегмента */
  disabled?: boolean;
}

export interface SegmentedPickerProps {
  /** список элементов */
  items: SegmentedPickerItem[];

  /** значение по умолчанию */
  defaultValue?: SegmentedPickerValue | null;

  /**
   * если true компонент ведет себя как block и занимает всю ширину контейнера
   * если false ведет себя как inline
   */
  block?: boolean;

  justify?: keyof typeof JustifyType;

  /** обработчик события клика на кнопку */
  onChange?: (value: SegmentedPickerValue) => void;

  /** Нижний отступ */
  mb?: number;
}
