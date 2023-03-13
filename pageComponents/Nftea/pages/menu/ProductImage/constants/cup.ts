import { css } from '@emotion/react';
import { ProductImgType } from '@/pageComponents/Nftea/globalTypes';
import { SerializedStyles } from '@emotion/react';
import { ProductImgSize } from '../types';

type SizeStyle = Record<ProductImgType, SerializedStyles>;

export const middle: SizeStyle = {
  [ProductImgType.TYPE1]: css`
    top: 33px;
    left: calc(50% - 33px);
    width: 66px;
    height: 94px;

    @media (min-width: 720px) {
      top: 48px;
      left: calc(50% - 48px);
      width: 95px;
      height: 135px;
    }
  `,
  [ProductImgType.TYPE2]: css`
    top: 13px;
    left: calc(50% - 30px);
    width: 60px;
    height: 114px;

    @media (min-width: 720px) {
      top: 16px;
      left: calc(50% - 43.5px);
      width: 87px;
      height: 164px;
    }
  `,
  [ProductImgType.TYPE3]: css`
    top: 23px;
    left: calc(50% - 24.5px);
    width: 49px;
    height: 104px;

    @media (min-width: 720px) {
      top: 34px;
      left: calc(50% - 35px);
      width: 70px;
      height: 148px;
    }
  `,
  [ProductImgType.TYPE4]: css`
    top: 13px;
    left: calc(50% - 34px);
    width: 68px;
    height: 114px;

    @media (min-width: 720px) {
      top: 19px;
      left: calc(50% - 49.5px);
      width: 99px;
      height: 164px;
    }
  `,
};

export const large: SizeStyle = {
  [ProductImgType.TYPE1]: css`
    top: 48px;
    left: calc(50% - 48px);
    width: 95px;
    height: 135px;
  `,
  [ProductImgType.TYPE2]: css`
    top: 18px;
    left: calc(50% - 43.5px);
    width: 87px;
    height: 164px;
  `,
  [ProductImgType.TYPE3]: css`
    top: 34px;
    left: calc(50% - 35px);
    width: 70px;
    height: 148px;
  `,
  [ProductImgType.TYPE4]: css`
    top: 19px;
    left: calc(50% - 49.5px);
    width: 99px;
    height: 164px;
  `,
};

export const sizeToCupStyle: Record<ProductImgSize, SizeStyle> = {
  middle,
  large,
};
