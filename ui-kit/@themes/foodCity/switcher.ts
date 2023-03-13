import { Color } from '@/ui-kit/@constants';
import {
  SwitcherKnobTheme,
  SwitcherLabelTheme,
  SwitcherSpinnerTheme,
  SwitcherTheme,
} from '../types';

const spinner: SwitcherSpinnerTheme = {
  stroke: Color.foodCity.Black_Oven_65,
  path: {
    stroke: Color.foodCity.Black_Oven_10,
    checkedStoke: Color.foodCity.Black_Oven_35,
  },
};

const knob: SwitcherKnobTheme = {
  bg: Color.foodCity.White,
  disabled: {
    bg: Color.foodCity.Black_Oven_02,
    checked: {
      bg: Color.foodCity.Black_Oven_10,
    },
  },
};

const label: SwitcherLabelTheme = {
  bg: Color.foodCity.Black_Oven_10,
  checked: {
    bg: Color.foodCity.Black_Oven,
  },
  disabled: {
    bg: Color.foodCity.Black_Oven_05,
    checked: {
      bg: Color.foodCity.Black_Oven_35,
    },
  },
};

export const switcher: SwitcherTheme = {
  spinner,
  knob,
  label,
};
