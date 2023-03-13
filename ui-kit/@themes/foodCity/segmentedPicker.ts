import { Color } from '@/ui-kit/@constants';
import { SegmentedPickerOptionTheme, SegmentedPickerTheme } from '../types';

export const option: SegmentedPickerOptionTheme = {
  label: {
    bg: Color.foodCity.Black_Oven_35,
  },
  text: {
    color: Color.foodCity.Black_Oven,
    disabled: {
      color: Color.foodCity.Black_Oven_35,
    },
    hover: {
      color: Color.foodCity.Black_Oven_65,
      bg: Color.foodCity.Black_Oven_02,
      bgChecked: 'transparent',
    },
    active: {
      color: Color.foodCity.Black_Oven,
      bg: Color.foodCity.Black_Oven_10,
      bgChecked: Color.foodCity.Black_Oven_02,
    },
  },
  spinner: {
    stroke: Color.foodCity.Black_Oven,
  },
};

export const segmentedPicker: SegmentedPickerTheme = {
  bg: Color.foodCity.Black_Oven_05,
  option,
};
