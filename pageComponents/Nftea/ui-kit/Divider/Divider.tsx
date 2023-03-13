import React, { FC } from 'react';
import * as Styled from './styles';
import { DividerProps } from './types';
import { Color } from '@/ui-kit/@constants';

export const Divider: FC<DividerProps> = (props) => {
  const { color = Color.NFTea.Black_BO_10, ...rest } = props;

  return (
    <Styled.Wrapper {...props}>
      <Styled.Hr color={color} />
    </Styled.Wrapper>
  );
};
