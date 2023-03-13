import { Color } from '@/ui-kit/@constants';
import {
  SelectsNoDataTheme,
  SelectsOptionsTheme,
  SelectsOptionTheme,
  SelectsSpinnerTheme,
  SelectsToggleTheme,
} from '../types';

const toggle: SelectsToggleTheme = {
  color: Color.foodCity.Black_Oven,
  disabledColor: Color.foodCity.Black_Oven_35,
};

const options: SelectsOptionsTheme = {
  bg: Color.foodCity.White,
};

const option: SelectsOptionTheme = {
  color: Color.foodCity.Black_Oven,
  bg: Color.foodCity.White,
  disabled: {
    color: Color.foodCity.Black_Oven_35,
  },
  hover: {
    bg: Color.foodCity.Black_Oven_02,
  },
  active: {
    bg: Color.foodCity.Black_Oven_10,
  },
  selected: {
    bg: Color.foodCity.Black_Oven_10,
  },
};

const spinner: SelectsSpinnerTheme = {
  stroke: Color.foodCity.Black_Oven_65,
};

const noData: SelectsNoDataTheme = {
  bg: Color.foodCity.White,
};

export const select = {
  toggle,
  options,
  option,
  spinner,
  noData,
};
