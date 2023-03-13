import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TitleProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  /** уровень заголовка 1 = h1, 2 = h2 ... */
  level?: 1 | 2 | 3 | 4;
  /** выравнивание загодовка */
  align?: 'left' | 'center' | 'right';
}
