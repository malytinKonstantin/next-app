import React, { FC } from 'react';
import { ProductImageProps } from './types';
import * as Styled from './styles';
import Image from 'next/image';
import { DEFAULT_CUP, DEFAULT_LID, DEFAULT_TYPE } from './constants/default';

export const ProductImage: FC<ProductImageProps> = (props) => {
  const {
    lid = DEFAULT_LID,
    cup = DEFAULT_CUP,
    type = DEFAULT_TYPE,
    size = 'middle',
  } = props;
  const alt = `Напиток - ${props.alt}`;

  return (
    <Styled.ImgContainer>
      <Styled.ImgLidShadow type={type} size={size} />
      <Styled.ImgCupShadow type={type} size={size} />
      <Styled.ImgLidWrapper type={type} size={size}>
        <Image
          loading="lazy"
          src={lid}
          width="110px"
          height="50px"
          alt={alt}
          title={alt}
        />
      </Styled.ImgLidWrapper>
      <Styled.CupImgWrapper type={type} size={size}>
        <Image
          loading="lazy"
          src={cup}
          width="95px"
          height="135px"
          alt={alt}
          title={alt}
        />
      </Styled.CupImgWrapper>
    </Styled.ImgContainer>
  );
};
