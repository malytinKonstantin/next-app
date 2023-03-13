import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export enum Align {
  top = 'top',
  middle = 'middle',
  bottom = 'bottom',
  baseline = 'baseline',
}

export enum JustifyContent {
  start = 'start',
  end = 'end',
  center = 'center',
  around = 'around',
  between = 'between',
}

export enum Direction {
  row = 'row',
  column = 'column',
}

export type Justify = keyof typeof JustifyContent;
export type Span = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface RowProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  /** вертикальное выравнивание (в зависимости от оси) */
  align?: keyof typeof Align;
  /** горизонтальное выравнивание (в зависимости от оси) */
  justify?: Justify;
  /** направление сетки row (строка) или column (столбец) */
  direction?: keyof typeof Direction;
  /** нижний отступ (margin-bottom) */
  mb?: number;
  /** внешние отступы (margin) */
  gutter?:
    | number
    | [number, number]
    | [number, number, number]
    | [number, number, number, number];
}

export interface ColProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  /** размер столбца (1 - 1/12 сетки или 8% .... 12 - вся сетка или 100%) */
  span?: Span;
  /** дочерний элемент */
  children: ReactNode;
}
