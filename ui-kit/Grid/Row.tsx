import React from 'react';
import type { RowProps } from './types';
import * as Styled from './styles';

export const Row: React.FC<RowProps> = (props) => {
  return <Styled.Row {...props}>{props.children}</Styled.Row>;
};
