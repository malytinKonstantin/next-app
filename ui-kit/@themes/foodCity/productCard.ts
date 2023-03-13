import { ProductCardType } from '@/components';
import { Color } from '@/ui-kit/@constants';
import {
  ProductCardCloseButtonTheme,
  ProductCardImgTheme,
  ProductCardSeparatorTheme,
  ProductCardShadowTheme,
  ProductCardSubTextTheme,
  ProductCardTextTheme,
  ProductCardTheme,
  ProductCardWrapperTheme,
} from '../types';

const wrapper: ProductCardWrapperTheme = {
  [ProductCardType.cart]: {
    bg: Color.foodCity.Black_Oven_05,
    border: 'none',
  },
  [ProductCardType.default]: {
    bg: Color.foodCity.White,
    border: `2px solid ${Color.foodCity.Black_Oven}`,
  },
};

const img: ProductCardImgTheme = {
  bg: Color.foodCity.Black_Oven_35,
};

const shadow: ProductCardShadowTheme = {
  [ProductCardType.cart]: {
    color: Color.foodCity.Black_Oven,
    bg: 'transparent',
  },
  [ProductCardType.default]: {
    color: Color.foodCity.White,
    bg: `linear-gradient(
      360deg,
      ${Color.foodCity.Black_Oven} 37.82%,
      rgba(9, 9, 10, 0.62) 61.12%,
      rgba(9, 9, 10, 0.31) 85%,
      rgba(9, 9, 10, 0) 100%
    )`,
  },
};

const text: ProductCardTextTheme = {
  [ProductCardType.cart]: {
    color: Color.foodCity.Black_Oven,
  },
  [ProductCardType.default]: {
    color: Color.foodCity.White,
  },
};

const subText: ProductCardSubTextTheme = {
  color: Color.foodCity.Black_Oven_35,
};

const separator: ProductCardSeparatorTheme = {
  bg: Color.foodCity.Black_Oven_35,
};

const closeButton: ProductCardCloseButtonTheme = {
  fill: Color.foodCity.Black_Oven_10,
};

export const productCard: ProductCardTheme = {
  wrapper,
  img,
  shadow,
  text,
  subText,
  separator,
  closeButton,
};
