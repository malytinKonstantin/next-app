import React from 'react';

export interface Action {
  id: string;
  caption: string;
  onClick: () => void;
}

export interface SystemModalProps {
  isOpen: boolean;
  title: string;
  text?: string | React.ReactNode;
  actions: Action[];
}
