import React, { FC, useEffect } from 'react';
import { Dialog } from '@/ui-kit/base/Dialog';
import { Icon } from '@/ui-kit/Icon';
import * as Styled from './styles';
import { ModalProps } from './types';
import { modalStore } from '@/ui-kit/base';

export const Modal: FC<ModalProps> = (props) => {
  const { isOpen, onClose, children } = props;

  useEffect(() => {
    modalStore.setIsOpen(isOpen);
  }, [isOpen]);

  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <Styled.Wrapper isOpen={isOpen}>
        {children}
        {onClose && (
          <Styled.CloseButton onClick={onClose}>
            <Icon name="closeFill" />
          </Styled.CloseButton>
        )}
      </Styled.Wrapper>
    </Dialog>
  );
};
