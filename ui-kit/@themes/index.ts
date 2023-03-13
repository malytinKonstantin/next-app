import { theme as foodCityTheme } from './foodCity';
import { theme as NFTeaTheme } from './NFTea';
import { UiKitTheme } from './types';
export * from './types';

export enum Theme {
  foodCity = 'foodCity',
  NFTea = 'NFTea',
}

export const theme: Record<Theme, UiKitTheme> = {
  [Theme.foodCity]: foodCityTheme,
  [Theme.NFTea]: NFTeaTheme,
};
