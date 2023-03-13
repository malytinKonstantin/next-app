import React from 'react';
import type { ColProps } from './types';
import * as Styled from './styles';

export const Col: React.FC<ColProps> = (props) => {
  return <Styled.Col {...props}>{props.children}</Styled.Col>;
};
