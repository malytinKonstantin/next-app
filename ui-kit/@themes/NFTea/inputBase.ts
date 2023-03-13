import { Color, FontFamily } from '@/ui-kit/@constants';
import { InputState } from '@/ui-kit/base/InputBase/constants';
import {
  InputBaseInputTheme,
  InputBaseLabelTheme,
  InputBaseMessage,
  InputBaseTheme,
} from '../types';

const input: InputBaseInputTheme = {
  fontFamily: FontFamily.HalvarMittelschrift,
  [InputState.default]: {
    color: Color.foodCity.Black_Oven,
    borderColor: Color.foodCity.Black_Oven_10,
    bg: Color.foodCity.White,
    placeholderColor: Color.foodCity.Black_Oven_35,

    hover: {
      backgroundColor: Color.foodCity.Black_Oven_02,
      bg: Color.foodCity.Black_Oven_35,
    },
    focus: {
      color: Color.foodCity.Black_Oven,
      bg: Color.foodCity.Black_Oven,
    },
    styles: {
      borderWidth: '2px !important',
    },
  },
  [InputState.disabled]: {
    color: Color.foodCity.Black_Oven_10,
    borderColor: Color.foodCity.Black_Oven_05,
    bg: Color.foodCity.Black_Oven_05,
    placeholderColor: Color.foodCity.Black_Oven_35,

    hover: {
      bg: Color.foodCity.Black_Oven_05,
      backgroundColor: Color.foodCity.Black_Oven_05,
    },
    focus: {
      color: Color.foodCity.Black_Oven_10,
      bg: Color.foodCity.Black_Oven_05,
    },
    styles: {
      borderWidth: '2px !important',
    },
  },
  [InputState.error]: {
    color: Color.foodCity.Red_Tomato,
    borderColor: Color.foodCity.Red_Tomato,
    bg: Color.foodCity.Red_Tomato_05,
    placeholderColor: Color.foodCity.Black_Oven_35,

    hover: {
      backgroundColor: Color.foodCity.Black_Oven_02,
      bg: Color.foodCity.Red_Tomato,
    },
    focus: {
      color: Color.foodCity.Black_Oven,
      bg: Color.foodCity.Red_Tomato,
    },
    styles: {
      borderWidth: '2px !important',
    },
  },
  [InputState.success]: {
    color: Color.foodCity.Black_Oven,
    borderColor: Color.foodCity.Green_Salad,
    bg: Color.foodCity.White,
    placeholderColor: Color.foodCity.Black_Oven_35,

    hover: {
      backgroundColor: Color.foodCity.Black_Oven_02,
      bg: Color.foodCity.Black_Oven_35,
    },
    focus: {
      color: Color.foodCity.Black_Oven,
      bg: Color.foodCity.Black_Oven,
    },
    styles: {
      borderWidth: '2px !important',
    },
  },
};

const label: InputBaseLabelTheme = {
  fontFamily: FontFamily.HalvarBreitschrift,
  color: Color.foodCity.Black_Oven,
  requiredColor: Color.foodCity.Red_Tomato,
  styles: {
    fontWeight: 400,
    marginBottom: 8,
  },
};

const message: InputBaseMessage = {
  [InputState.default]: {
    color: Color.foodCity.Black_Oven_35,
  },
  [InputState.disabled]: {
    color: Color.foodCity.Black_Oven_10,
  },
  [InputState.error]: {
    color: Color.foodCity.Red_Tomato,
  },
  [InputState.success]: {
    color: Color.foodCity.Black_Oven_35,
  },
};

export const inputBase: InputBaseTheme = {
  input,
  label,
  message,
};
