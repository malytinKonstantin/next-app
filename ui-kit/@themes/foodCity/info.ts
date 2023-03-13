import { InfoType } from '@/components';
import { Color } from '@/ui-kit/@constants';
import {
  InfoDescriptionTheme,
  InfoInfoBoxTheme,
  InfoTheme,
  InfoTitleTheme,
} from '../types';

const row: Record<keyof typeof InfoType, string> = {
  info: Color.foodCity.Black_Oven_05,
  neutral: Color.foodCity.White,
  positive: Color.foodCity.Green_Salad_20,
  warning: Color.foodCity.Yellow_Mango_15,
  negative: Color.foodCity.Red_Tomato_10,
};

const infoBox: InfoInfoBoxTheme = {
  color: Color.foodCity.Black_Oven,
  bg: {
    info: Color.foodCity.Black_Oven_10,
    neutral: Color.foodCity.Black_Oven_05,
    positive: Color.foodCity.Green_Salad,
    warning: Color.foodCity.Yellow_Mango,
    negative: Color.foodCity.Red_Tomato_80,
  },
};

const title: InfoTitleTheme = {
  color: Color.foodCity.Black_Oven,
};

const description: InfoDescriptionTheme = {
  color: Color.foodCity.Black_Oven_65,
};

export const info: InfoTheme = {
  row,
  infoBox,
  title,
  description,
};
