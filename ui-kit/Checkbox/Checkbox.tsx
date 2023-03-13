import React, { useCallback, useEffect, useState } from 'react';
import { useId } from '@/hooks';
import * as Styled from './styles';
import { defaultProps } from './Checkbox.defaultProps';
import { CheckBoxProps } from './types';

export const Checkbox: React.FC<CheckBoxProps> = (props) => {
  const {
    label,
    mb = defaultProps.mb,
    block = defaultProps.block,
    disabled = defaultProps.disabled,
    checked: imperativeChecked = defaultProps.checked,
    error = defaultProps.error,
    indeterminate = defaultProps.indeterminate,
    onChange,
  } = props;

  const id = useId();
  const [checked, setChecked] = useState(imperativeChecked);

  useEffect(() => {
    setChecked(imperativeChecked);
  }, [imperativeChecked]);

  const handleCheck = useCallback(() => {
    setChecked((prev) => {
      const nextValue = indeterminate ? checked : !prev;
      if (typeof onChange === 'function') {
        onChange(nextValue);
      }
      return nextValue;
    });
  }, [onChange, indeterminate, checked]);

  return (
    <Styled.Wrapper mb={mb} block={block}>
      <Styled.Input
        id={id}
        type="checkbox"
        onChange={handleCheck}
        disabled={disabled}
      />
      <Styled.Label
        htmlFor={id}
        checked={checked}
        disabled={disabled}
        error={error}
      >
        <Styled.Box
          checked={checked}
          disabled={disabled}
          error={error}
          indeterminate={indeterminate}
        >
          <Styled.Tick name="approveTick" height={24} width={24} />
        </Styled.Box>
        <span>{label}</span>
      </Styled.Label>
    </Styled.Wrapper>
  );
};
