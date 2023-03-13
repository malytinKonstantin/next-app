import React, { FC } from 'react';
import { Dialog } from '@/ui-kit/base/Dialog';
import * as Styled from './styles';
import { defaultProps } from './Drawer.defaultProps';
import { DrawerProps } from './types';

export const Drawer: FC<DrawerProps> = (props) => {
  const { isOpen, onClose, position = defaultProps.position, children } = props;

  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <Styled.Wrapper isOpen={isOpen} position={position}>
        {children}
      </Styled.Wrapper>
    </Dialog>
  );
};
