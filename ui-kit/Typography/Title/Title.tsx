import React from 'react';
import * as Styled from './styles';

import { type TitleProps } from './types';

export const Title: React.FC<TitleProps> = (props) => {
  const { level = 1, children, ...rest } = props;

  const ComponetMap = {
    [1]: Styled.H1,
    [2]: Styled.H2,
    [3]: Styled.H3,
    [4]: Styled.H4,
  };

  const Component = ComponetMap[level];

  return <Component {...rest}>{children}</Component>;
};
