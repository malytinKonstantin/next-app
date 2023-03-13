import React from 'react';
import * as Styled from './styles';
import { InputBaseProps } from './types';

export const InputBase: React.FC<InputBaseProps> = (props) => {
  const { label, children, id, helpMessage, mb, ...rest } = props;

  const message = props.validation?.message || helpMessage;

  return (
    <Styled.Wrapper mb={mb}>
      {label && (
        <Styled.Label {...rest} htmlFor={id}>
          {label}
        </Styled.Label>
      )}
      <Styled.InputWrapper {...rest}>{children}</Styled.InputWrapper>
      {message && <Styled.Message {...rest}>{message}</Styled.Message>}
    </Styled.Wrapper>
  );
};
