import { Color } from '@/ui-kit/@constants';
import {
  CheckBoxRowPriceTheme,
  CheckBoxRowRowTheme,
  CheckBoxRowTheme,
} from '../types';

const row: CheckBoxRowRowTheme = {
  normal: {
    color: Color.foodCity.Black_Oven,
    bg: Color.foodCity.Black_Oven_05,
  },
  error: {
    bg: Color.foodCity.Red_Tomato_05,
  },
  disabled: {
    color: Color.foodCity.Black_Oven_35,
  },
};

const price: CheckBoxRowPriceTheme = {
  normal: {
    bg: Color.foodCity.White,
  },
  disabled: {
    bg: 'transparent',
  },
};

export const checkBoxRow: CheckBoxRowTheme = {
  row,
  price,
};
