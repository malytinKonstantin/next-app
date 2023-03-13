import { Color } from '@/ui-kit/@constants';
import { CheckBoxBoxTheme, CheckBoxTheme } from '../types';

const label = {
  borderColor: {
    disabled: Color.foodCity.Black_Oven_10,
    checked: Color.foodCity.Black_Oven,
    error: Color.foodCity.Red_Tomato,
    normal: Color.foodCity.Black_Oven_35,
  },

  color: {
    disabled: Color.foodCity.Black_Oven_35,
    error: Color.foodCity.Red_Tomato,
    normal: Color.foodCity.Black_Oven,
  },
};

const box: CheckBoxBoxTheme = {
  bgColor: {
    disabled: Color.foodCity.Black_Oven_05,
    checked: Color.foodCity.Black_Oven,
    error: Color.foodCity.Red_Tomato,
    normal: Color.foodCity.White,
  },

  tickColor: {
    error: Color.foodCity.White,
    disabledChecked: Color.foodCity.Black_Oven_35,
    normal: Color.foodCity.White,
  },

  indeterminateColor: {
    disabled: Color.foodCity.Black_Oven_35,
    error: Color.foodCity.White,
    normal: Color.foodCity.Black_Oven,
  },
};

export const checkBox: CheckBoxTheme = {
  label,
  box,
};
