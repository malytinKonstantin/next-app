import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Image from 'next/image';
import { ProductImageProps } from './types';
import { sizeToLidStyle } from './constants/lid';
import { sizeToCupStyle } from './constants/cup';
import { sizeToLidShadowStyle } from './constants/shadow-lid';
import { sizeToCupShudowStyle } from './constants/shadow-cup';

type ImgProp = Required<Pick<ProductImageProps, 'type' | 'size'>>;

export const ImgContainer = styled.div(() => {
  return css`
    position: relative;
  `;
});

export const ImgLidShadow = styled.div<ImgProp>((props) => {
  const { type, size } = props;
  const typeToStyle = sizeToLidShadowStyle[size];

  return css`
    position: absolute;
    top: 11px;
    background: url('/nftea/img/cups/shadow-type-${type}/lid.svg');
    ${typeToStyle[type] && typeToStyle[type].styles};
  `;
});

export const ImgLidWrapper = styled.div<ImgProp>((props) => {
  const { type, size } = props;
  const typeToStyle = sizeToLidStyle[size];

  return css`
    > span {
      position: unset !important;
    }

    > span > img {
      object-fit: contain;
    }

    position: absolute;
    top: 0;
    ${typeToStyle[type] && typeToStyle[type].styles};
  `;
});

export const ImgLid = styled(Image)<ImgProp>((props) => {
  const { type, size } = props;
  const typeToStyle = sizeToLidStyle[size];

  return css`
    ${typeToStyle[type] && typeToStyle[type].styles}
  `;
});

export const CupImgWrapper = styled.div<ImgProp>((props) => {
  const { type, size } = props;
  const typeToStyle = sizeToCupStyle[size];

  return css`
    > span {
      position: unset !important;
    }

    > span > img {
      object-fit: contain;
      width: 100% !important;
      height: unset !important;
    }
    position: absolute;
    ${typeToStyle[type] && typeToStyle[type].styles}
  `;
});

export const ImgCupShadow = styled.div<ImgProp>((props) => {
  const { type, size } = props;
  const typeToStyle = sizeToCupShudowStyle[size];

  return css`
    position: absolute;
    background: url('/nftea/img/cups/shadow-type-${type}/cup.svg');
    ${typeToStyle[type] && typeToStyle[type].styles};
  `;
});

export const ImgCupImg = styled.img<ImgProp>((props) => {
  const { type, size } = props;
  const typeToStyle = sizeToCupStyle[size];

  return css`
    position: absolute;
    ${typeToStyle[type] && typeToStyle[type].styles}
  `;
});
