import React, { FC } from 'react';
import * as Styled from './styles';
import { DividerProps } from './types';

export const Divider: FC<DividerProps> = (props) => {
  return (
    <Styled.Wrapper {...props}>
      <Styled.Hr />
    </Styled.Wrapper>
  );
};
