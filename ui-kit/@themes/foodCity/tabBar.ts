import { Color } from '@/ui-kit/@constants';
import {
  ActiveStateTheme,
  TabBarTabTheme,
  TabBarTheme,
  TabBarWrapperTheme,
} from '../types';

const wrapper: TabBarWrapperTheme = {
  color: Color.foodCity.Black_Oven,
  bg: Color.foodCity.White,
};

const tab: TabBarTabTheme = {
  color: Color.foodCity.Black_Oven_35,
  activeColor: Color.foodCity.Black_Oven,
  notification: {
    color: Color.foodCity.White,
    bg: Color.foodCity.Red_Tomato,
  },
  hover: {
    color: Color.foodCity.Black_Oven_65,
  },
  active: {
    color: Color.foodCity.Black_Oven,
    bg: Color.foodCity.Black_Oven_02,
  },
};

const activeState: ActiveStateTheme = {
  bg: Color.foodCity.Black_Oven,
};

export const tabBar: TabBarTheme = {
  wrapper,
  tab,
  activeState,
};
