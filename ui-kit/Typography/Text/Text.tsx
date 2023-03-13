import React from 'react';
import * as Styled from './styles';

import { type TextProps } from './types';

export const Text: React.FC<TextProps> = (props) => {
  const { children, ...rest } = props;

  return <Styled.Text {...rest}>{children}</Styled.Text>;
};
