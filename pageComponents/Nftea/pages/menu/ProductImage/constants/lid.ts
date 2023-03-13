import { css } from '@emotion/react';
import { SerializedStyles } from '@emotion/react';
import { ProductImgType } from '@/pageComponents/Nftea/globalTypes';
import { ProductImgSize } from '../types';

type SizeStyle = Record<ProductImgType, SerializedStyles>;

export const middle: SizeStyle = {
  [ProductImgType.TYPE1]: css`
    left: calc(50% - 37.5px);
    width: 77px;
    height: 35px;

    @media (min-width: 720px) {
      left: calc(50% - 55px);
      width: 110px;
      height: 51px;
    }
  `,
  [ProductImgType.TYPE2]: css`
    left: calc(50% - 34.5px);
    width: 69px;
    height: 15px;

    @media (min-width: 720px) {
      left: calc(50% - 49.5px);
      width: 99px;
      height: 21px;
    }
  `,
  [ProductImgType.TYPE3]: css`
    left: calc(50% - 28.5px);
    width: 57px;
    height: 25px;

    @media (min-width: 720px) {
      left: calc(50% - 40.5px);
      width: 81px;
      height: 36px;
    }
  `,
  [ProductImgType.TYPE4]: css`
    left: calc(50% - 39.5px);
    width: 79px;
    height: 15px;

    @media (min-width: 720px) {
      left: calc(50% - 61px);
      width: 122px;
      height: 21px;
    }
  `,
};

export const large: SizeStyle = {
  [ProductImgType.TYPE1]: css`
    left: calc(50% - 55px);
    width: 110px;
    height: 51px;
  `,
  [ProductImgType.TYPE2]: css`
    left: calc(50% - 49.5px);
    width: 99px;
    height: 21px;
  `,
  [ProductImgType.TYPE3]: css`
    left: calc(50% - 40.5px);
    width: 81px;
    height: 36px;
  `,
  [ProductImgType.TYPE4]: css`
    left: calc(50% - 61px);
    width: 122px;
    height: 21px;
  `,
};

export const sizeToLidStyle: Record<ProductImgSize, SizeStyle> = {
  middle,
  large,
};
