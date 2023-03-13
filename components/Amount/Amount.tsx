import React, { FC } from 'react';
import { Text } from '@/ui-kit';
import * as Styled from './styles';
import { AmountProps } from './types';
import { defaultProps } from './Amount.defaultProps';

export const Amount: FC<AmountProps> = (props) => {
  const { value, oldValue, currency = defaultProps.currency, disabled } = props;

  return (
    <Styled.Wrapper isDisabled={disabled}>
      {oldValue && (
        <Styled.OldValue size="small" deleted>
          {oldValue}
        </Styled.OldValue>
      )}
      <Text>{value.toLocaleString()}</Text>
      <Text>{currency}</Text>
    </Styled.Wrapper>
  );
};
