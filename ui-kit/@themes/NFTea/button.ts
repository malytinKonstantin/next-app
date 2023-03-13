import { Color, FontFamily } from '@/ui-kit/@constants';
import { ComponentSize } from '@/ui-kit/@types';
import { ButtonType } from '@/ui-kit/Button';
import { ButtonSpinTheme, ButtonTheme } from '../types';

const spin: ButtonSpinTheme = {
  [ButtonType.primary]: {
    border: {
      color: `rgb(255 255 255 / 30%)`,
    },
    borderLeft: {
      color: `${Color.foodCity.Black_Oven_35}`,
    },
  },
  [ButtonType.secondary]: {
    border: {
      color: `rgb(0 0 0 / 20%)`,
    },
    borderLeft: {
      color: `${Color.foodCity.Black_Oven_65}`,
    },
  },
  [ButtonType.danger]: {
    border: {
      color: `${Color.foodCity.Red_Tomato_80}20`,
    },
    borderLeft: {
      color: `${Color.foodCity.Red_Tomato_80}`,
    },
  },
  [ButtonType.ghost]: {
    border: {
      color: `rgb(0 0 0 / 20%)`,
    },
    borderLeft: {
      color: `${Color.foodCity.Black_Oven_65}`,
    },
  },
};

export const button: ButtonTheme = {
  fontFamily: `${FontFamily.HalvarMittelschrift}`,
  spin,

  disabled: {
    color: Color.foodCity.Black_Oven_35,
    backgroundColor: Color.foodCity.Black_Oven_05,
    borderColor: Color.foodCity.Black_Oven_05,
  },

  [ButtonType.primary]: {
    normal: {
      color: Color.foodCity.White,
      backgroundColor: Color.NFTea.Purple_Sugar_100,
      borderColor: Color.NFTea.Purple_Sugar_100,
    },
    loading: {
      color: Color.foodCity.Black_Oven_35,
      backgroundColor: Color.NFTea.Purple_Sugar_100,
      borderColor: Color.NFTea.Purple_Sugar_100,
    },
    hover: {
      color: Color.NFTea.Purple_Sugar_35,
      backgroundColor: Color.NFTea.Purple_Sugar_65,
      borderColor: Color.NFTea.Purple_Sugar_65,
    },
    active: {
      color: Color.foodCity.Black_Oven_35,
      backgroundColor: Color.NFTea.Purple_Sugar_100,
      borderColor: Color.NFTea.Purple_Sugar_100,
    },
  },

  [ButtonType.secondary]: {
    normal: {
      color: Color.foodCity.Black_Oven,
      backgroundColor: Color.foodCity.Black_Oven_05,
      borderColor: Color.foodCity.Black_Oven_05,
    },
    loading: {
      color: Color.foodCity.Black_Oven_65,
      backgroundColor: Color.foodCity.White,
      borderColor: Color.foodCity.White,
    },
    hover: {
      color: Color.foodCity.Black_Oven_65,
      backgroundColor: Color.foodCity.White,
      borderColor: Color.foodCity.White,
    },
    active: {
      color: Color.foodCity.Black_Oven,
      backgroundColor: Color.foodCity.Black_Oven_10,
      borderColor: Color.foodCity.Black_Oven_10,
    },
  },

  [ButtonType.danger]: {
    normal: {
      color: Color.foodCity.Red_Tomato,
      backgroundColor: Color.foodCity.Black_Oven_10,
      borderColor: Color.foodCity.Black_Oven_10,
    },
    loading: {
      color: Color.foodCity.Red_Tomato,
      backgroundColor: Color.foodCity.Black_Oven_05,
      borderColor: Color.foodCity.Black_Oven_05,
    },
    hover: {
      color: Color.foodCity.Red_Tomato,
      backgroundColor: Color.foodCity.White,
      borderColor: Color.foodCity.White,
    },
    active: {
      color: Color.foodCity.Red_Tomato_80,
      backgroundColor: Color.foodCity.Black_Oven_05,
      borderColor: Color.foodCity.Black_Oven_05,
    },
  },

  [ButtonType.ghost]: {
    normal: {
      color: Color.foodCity.Black_Oven,
      backgroundColor: 'transparent',
      borderColor: 'transparent',
    },
    loading: {
      color: Color.foodCity.Black_Oven_65,
      backgroundColor: Color.foodCity.Black_Oven_02,
      borderColor: Color.foodCity.Black_Oven_02,
    },
    hover: {
      color: Color.foodCity.Black_Oven_65,
      backgroundColor: 'transparent',
      borderColor: 'transparent',
    },
    active: {
      color: Color.foodCity.Black_Oven,
      backgroundColor: Color.foodCity.Black_Oven_05,
      borderColor: Color.foodCity.Black_Oven_05,
    },
  },

  [ComponentSize.small]: {
    [ButtonType.danger]: {
      hover: {
        color: Color.foodCity.Red_Tomato_80,
      },
      disabled: {
        color: Color.foodCity.Black_Oven_35,
      },
    },
    [ButtonType.ghost]: {
      normal: {
        borderColor: Color.foodCity.Black_Oven,
      },
    },
  },
  styles: {
    borderRadius: 24,
  },
};
