import React from 'react';
import * as Styled from './styles';
import { defaultProps } from './PriceText.defaultProps';
import { type PriceTextProps } from './types';

export const PriceText: React.FC<PriceTextProps> = (props) => {
  const { children, currency = defaultProps.currency, ...rest } = props;

  return (
    <Styled.PriceText {...rest}>
      {children} {currency}
    </Styled.PriceText>
  );
};
