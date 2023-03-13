import { css } from '@emotion/react';
import { ProductImgType } from '@/pageComponents/Nftea/globalTypes';
import { SerializedStyles } from '@emotion/react';
import { ProductImgSize } from '../types';

type SizeStyle = Record<ProductImgType, SerializedStyles>;

export const middle: SizeStyle = {
  [ProductImgType.TYPE1]: css`
    position: absolute;
    top: 44px;
    left: calc(50% - 22px);
    width: 66px;
    height: 94px;
    background-size: 66px 94px;

    @media (min-width: 720px) {
      top: 59px;
      left: calc(50% - 37px);
      width: 95px;
      height: 135px;
      background-size: 95px 135px;
    }
  `,
  [ProductImgType.TYPE2]: css`
    position: absolute;
    top: 24px;
    left: calc(50% - 20px);
    width: 60px;
    height: 114px;
    background-size: 60px 114px;

    @media (min-width: 720px) {
      top: 30px;
      left: calc(50% - 32.5px);
      width: 87px;
      height: 164px;
      background-size: 87px 164px;
    }
  `,
  [ProductImgType.TYPE3]: css`
    position: absolute;
    top: 34px;
    left: calc(50% - 13.5px);
    width: 49px;
    height: 104px;
    background-size: 49px 104px;

    @media (min-width: 720px) {
      top: 45px;
      left: calc(50% - 24px);
      width: 70px;
      height: 148px;
      background-size: 70px 148px;
    }
  `,
  [ProductImgType.TYPE4]: css`
    position: absolute;
    top: 24px;
    left: calc(50% - 23px);
    width: 68px;
    height: 114px;
    background-size: 68px 114px;

    @media (min-width: 720px) {
      top: 30px;
      left: calc(50% - 38.5px);
      width: 99px;
      height: 164px;
      background-size: 99px 164px;
    }
  `,
};

export const large: SizeStyle = {
  [ProductImgType.TYPE1]: css`
    position: absolute;
    top: 59px;
    left: calc(50% - 37px);
    width: 95px;
    height: 135px;
    background-size: 95px 135px;
  `,
  [ProductImgType.TYPE2]: css`
    top: 29px;
    left: calc(50% - 32.5px);
    width: 87px;
    height: 164px;
    background-size: 87px 164px;
  `,
  [ProductImgType.TYPE3]: css`
    top: 45px;
    left: calc(50% - 24px);
    width: 70px;
    height: 148px;
    background-size: 70px 148px;
  `,
  [ProductImgType.TYPE4]: css`
    top: 29px;
    left: calc(50% - 38.5px);
    width: 99px;
    height: 164px;
    background-size: 99px 164px;
  `,
};

export const sizeToCupShudowStyle: Record<ProductImgSize, SizeStyle> = {
  middle,
  large,
};
