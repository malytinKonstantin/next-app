import { css } from '@emotion/react';
import { SerializedStyles } from '@emotion/react';
import { ProductImgType } from '@/pageComponents/Nftea/globalTypes';
import { ProductImgSize } from '../types';

type SizeStyle = Record<ProductImgType, SerializedStyles>;

export const middle: SizeStyle = {
  [ProductImgType.TYPE1]: css`
    left: calc(50% - 26.5px);
    width: 77px;
    height: 35px;
    background-size: 77px 35px;

    @media (min-width: 720px) {
      left: calc(50% - 44px);
      width: 110px;
      height: 51px;
      background-size: 110px 51px;
    }
  `,
  [ProductImgType.TYPE2]: css`
    left: calc(50% - 23.5px);
    width: 69px;
    height: 15px;
    background-size: 69px 15px;

    @media (min-width: 720px) {
      left: calc(50% - 38.5px);
      width: 99px;
      height: 21px;
      background-size: 99px 21px;
    }
  `,
  [ProductImgType.TYPE3]: css`
    left: calc(50% - 17.5px);
    width: 57px;
    height: 25px;
    background-size: 57px 25px;

    @media (min-width: 720px) {
      left: calc(50% - 28.5px);
      width: 81px;
      height: 36px;
      background-size: 81px 36px;
    }
  `,
  [ProductImgType.TYPE4]: css`
    left: calc(50% - 28.5px);
    width: 79px;
    height: 15px;
    background-size: 79px 15px;

    @media (min-width: 720px) {
      left: calc(50% - 50px);
      width: 122px;
      height: 21px;
      background-size: 122px 21px;
    }
  `,
};

export const large: SizeStyle = {
  [ProductImgType.TYPE1]: css`
    left: calc(50% - 44px);
    width: 110px;
    height: 51px;
    background-size: 110px 51px;
  `,
  [ProductImgType.TYPE2]: css`
    left: calc(50% - 38.5px);
    width: 99px;
    height: 21px;
    background-size: 99px 21px;
  `,
  [ProductImgType.TYPE3]: css`
    left: calc(50% - 28.5px);
    width: 81px;
    height: 36px;
    background-size: 81px 36px;
  `,
  [ProductImgType.TYPE4]: css`
    left: calc(50% - 50px);
    width: 122px;
    height: 21px;
    background-size: 122px 21px;
  `,
};

export const sizeToLidShadowStyle: Record<ProductImgSize, SizeStyle> = {
  middle,
  large,
};
