import { ComponentSize } from '@/ui-kit/@types';

interface ButtonProps {
  loading?: boolean;
}

export interface StepperProps {
  /** Начальное значение инпута, если не передано, устанавливается в значение min */
  initialValue?: number;

  /** Свойства кнопок плюс/минус
   * {
   *   loading?: boolean
   * }
   * Если свойство loading=true вместо иконки будет показан спиннер
   */
  decrementProps?: ButtonProps;
  incrementProps?: ButtonProps;

  /** Размер степпера: small, medium or large */
  size?: keyof typeof ComponentSize;

  /** Наименьшее значение степпера, по дефолту равно 0 */
  min?: number;

  /** Наибольшее значение степпера, по дефолту равно 999 */
  max?: number;

  /** Шаг изменения */
  step?: number;

  /**
   * Функция коллбэк, если передана, будет вызвана при изменении значения степпера
   * с новым значением степпера в качестве аргумента
   * */
  onChange?: (value: number) => void;

  /** Нижний отступ */
  mb?: number;
}
