import React from 'react';
import { Icon } from '@/ui-kit';
import * as Styled from './styles';
import { ActionProps } from '@/ui-kit/base/Action/types';
import { defaultProps } from './Action.defaultProps';
import { ComponentSize } from '@/ui-kit/@types';

export const Action: React.FC<ActionProps> = (props) => {
  const {
    label,
    disabled = defaultProps.disabled,
    size = defaultProps.size,
    mb = defaultProps.mb,
    onClick,
  } = props;
  const iconSize = size === ComponentSize.small ? 16 : 24;

  return (
    <Styled.Button size={size} mb={mb} onClick={onClick} disabled={disabled}>
      <span>{label}</span>
      <Icon
        name="rightArrow"
        width={iconSize}
        height={iconSize}
        fill="currentColor"
      />
    </Styled.Button>
  );
};
