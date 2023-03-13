import { Color } from '@/ui-kit/@constants';
import { StepperTheme, StepperButtonTheme } from '../types';

const button: StepperButtonTheme = {
  color: Color.foodCity.Black_Oven,
  bg: Color.foodCity.White,
  loading: {
    bg: Color.foodCity.Black_Oven_02,
  },
  disabled: {
    color: Color.foodCity.Black_Oven_10,
  },
  hover: {
    color: Color.foodCity.Black_Oven_65,
  },
  active: {
    color: Color.foodCity.Black_Oven,
    bg: Color.foodCity.Black_Oven_02,
  },
};

export const stepper: StepperTheme = {
  wrapper: { border: { color: Color.foodCity.Black_Oven_10 } },
  spinner: { stroke: Color.foodCity.Black_Oven_65 },
  button,
};
