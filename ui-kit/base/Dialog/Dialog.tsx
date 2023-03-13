import React, { FC } from 'react';
import { Portal } from '@/ui-kit/Portal';
import * as Styled from './styles';
import { DialogProps } from './types';

export const Dialog: FC<DialogProps> = (props) => {
  const { isOpen, children, onClose } = props;

  return (
    <Portal>
      <Styled.Wrapper isOpen={isOpen} onClick={onClose}>
        {children}
      </Styled.Wrapper>
    </Portal>
  );
};
