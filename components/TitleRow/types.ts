import { ActionProps } from '@/ui-kit/base';

export interface TitleRowProps {
  /** Заголовок */
  title: string;

  /** Свойства кнопки действия */
  actionProps?: ActionProps;

  /** уровень заголовка 2 = h2, 3 = h3 ... */
  level?: 2 | 3 | 4;

  /** Признак блочной модели */
  block?: boolean;

  /** Нижний отступ */
  mb?: number;
}
