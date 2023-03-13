import { ReactNode } from 'react';

// TODO: переделать на enum
export type Position = 'top' | 'bottom' | 'left' | 'right';

export type DrawerProps = {
  /** открыт */
  isOpen: boolean;

  /** позиционирование контейнера контента отсносительно экрана */
  position?: Position;

  children: ReactNode;

  // eslint-disable-next-line @typescript-eslint/ban-types
  onClose?: () => void;
};
