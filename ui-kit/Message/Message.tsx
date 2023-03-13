import React from 'react';
import type { MessageProps } from './types';
import { MessageStatus } from './types';
import { Icon, IconNameEnum } from '@/ui-kit/Icon';
import * as Styled from './styles';

const iconMap: Record<MessageStatus, keyof typeof IconNameEnum> = {
  [MessageStatus.success]: 'checkGreen',
  [MessageStatus.warning]: 'warningYellow',
  [MessageStatus.error]: 'closeRed',
};

export const Message: React.FC<MessageProps> = (props) => {
  const { message, status, isOpen } = props;

  const icon = iconMap[status];
  console.log('+++ ', icon, props);

  return (
    <Styled.MessageWrapper isOpen={isOpen}>
      {icon && <Icon name={icon} />}
      <Styled.Text>{message}</Styled.Text>
    </Styled.MessageWrapper>
  );
};
