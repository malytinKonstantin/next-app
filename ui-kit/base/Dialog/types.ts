import { ReactNode } from 'react';

export type DialogProps = {
  isOpen: boolean;

  children: ReactNode;

  // eslint-disable-next-line @typescript-eslint/ban-types
  onClose?: () => void;
};
