import React from 'react';
import { useId } from '@/hooks';
import * as Styled from './styles';
import { defaultProps } from './Radio.defaultProps';
import { RadioProps } from './types';

export const Radio = (props: RadioProps) => {
  const {
    label,
    mb = defaultProps.mb,
    disabled = defaultProps.disabled,
    checked = defaultProps.checked,
    error = defaultProps.error,
    onChange,
  } = props;

  const id = useId();

  return (
    <Styled.Wrapper mb={mb}>
      <Styled.Input
        id={id}
        type="radio"
        onChange={onChange}
        disabled={disabled}
      />
      <Styled.Label
        htmlFor={id}
        checked={checked}
        disabled={disabled}
        error={error}
      >
        <Styled.Dot checked={checked} disabled={disabled} error={error} />
        {label && <span>{label}</span>}
      </Styled.Label>
    </Styled.Wrapper>
  );
};
