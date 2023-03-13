import React from 'react';
import * as Styled from './styles';
import { StepperProps } from './types';
import { defaultProps } from './Stepper.defaultProps';
import { ComponentSize } from '@/ui-kit/@types';
import { useChangeHandlers } from '@/ui-kit/Stepper/hooks';

export const Stepper: React.FC<StepperProps> = (props) => {
  const {
    initialValue,
    onChange,
    min = defaultProps.min,
    max = defaultProps.max,
    mb = defaultProps.mb,
    size = ComponentSize.large,
    step = defaultProps.step,
    decrementProps = defaultProps.decrementProps,
    incrementProps = defaultProps.incrementProps,
  } = props;

  const { value, increase, decrease, handleChange } = useChangeHandlers({
    initialValue,
    min,
    max,
    step,
    onChange,
  });

  const loading = Boolean(decrementProps.loading || incrementProps.loading);
  const inputDisabled = min === max || loading;
  const decrementSelfDisabled = value <= min;
  const decrementDisabled = decrementSelfDisabled || loading;
  const incrementSelfDisabled = value >= max;
  const incrementDisabled = incrementSelfDisabled || loading;

  return (
    <Styled.Wrapper mb={mb} size={size}>
      <Styled.Button
        size={size}
        onClick={decrease}
        disabled={decrementDisabled}
        selfDisabled={decrementSelfDisabled}
        isLoading={decrementProps.loading}
      >
        {!decrementProps.loading && (
          <Styled.ButtonIcon name="minus" width={24} height={24} />
        )}
        {decrementProps.loading && (
          <Styled.Spinner rotate name="spinner" width={24} height={24} />
        )}
      </Styled.Button>
      <Styled.Input
        uiSize={size}
        type="number"
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
        disabled={inputDisabled}
      />
      <Styled.Button
        size={size}
        onClick={increase}
        disabled={incrementDisabled}
        selfDisabled={incrementSelfDisabled}
        isLoading={incrementProps.loading}
      >
        {!incrementProps.loading && (
          <Styled.ButtonIcon name="plus" width={24} height={24} />
        )}
        {incrementProps.loading && (
          <Styled.Spinner rotate name="spinner" width={24} height={24} />
        )}
      </Styled.Button>
    </Styled.Wrapper>
  );
};
