import React from 'react';
import { useId } from '@/hooks';
import * as Styled from './styles';
import { SwitcherProps } from '@/ui-kit/Switcher/types';
import { defaultProps } from '@/ui-kit/Switcher/Switcher.defaultProps';
import { useChangeHandlers } from '@/ui-kit/Switcher/hooks/useChangeHandlers';

export const Switcher: React.FC<SwitcherProps> = (props) => {
  const {
    label,
    checked: imperativeChecked = defaultProps.checked,
    disabled: imperativeDisabled,
    onChange,
    mb = defaultProps.mb,
  } = props;

  const id = useId();
  const { loading, checked, handleChange } = useChangeHandlers({
    imperativeChecked,
    onChange,
  });

  const disabled = imperativeDisabled || loading;

  return (
    <Styled.Wrapper mb={mb}>
      <Styled.Input
        id={id}
        type={'checkbox'}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
      />
      <Styled.Label htmlFor={id} disabled={disabled} checked={checked}>
        <Styled.Knob checked={checked} disabled={disabled}>
          {loading && (
            <Styled.Spinner
              rotate
              name="spinner"
              width={24}
              height={24}
              checked={checked}
            />
          )}
        </Styled.Knob>
        {label && <span>{label}</span>}
      </Styled.Label>
    </Styled.Wrapper>
  );
};
