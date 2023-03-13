import { ChangeEvent, useEffect, useState } from 'react';
import { StepperProps } from '@/ui-kit/Stepper/types';

type IUseChangeHandlers = Required<Pick<StepperProps, 'min' | 'max' | 'step'>> &
  Pick<StepperProps, 'initialValue' | 'onChange'>;
export const useChangeHandlers = (props: IUseChangeHandlers) => {
  const { initialValue, min, max, step, onChange } = props;

  const [value, setValue] = useState<number>(initialValue ?? min);

  useEffect(() => {
    if (typeof onChange === 'function') {
      onChange(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const decrease = () => {
    setValue(Math.max(value - step, min!));
  };

  const increase = () => {
    setValue(Math.min(value + step, max!));
  };

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    let nextValue = parseInt(evt.currentTarget.value, 10);

    if (isNaN(nextValue)) {
      nextValue = min;
    }

    evt.currentTarget.value = nextValue.toString();
    if (nextValue > max || nextValue < min) {
      return;
    }
    setValue(nextValue);
  };

  return {
    value,
    decrease,
    increase,
    handleChange,
  };
};
