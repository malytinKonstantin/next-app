import React, { FC } from 'react';
import Link from 'next/link';
import {
  DEFAULT_CURRENCY,
  DEFAULT_MEASURE,
} from '@/pageComponents/Nftea/constants/product';
import * as Styled from './styles';
import { ProductCardProps } from './types';
import { ProductImage } from '../../ProductImage';

export const ProductCard: FC<ProductCardProps> = (props) => {
  const { id, name, description, volume, price } = props;

  const measure = props.measure || DEFAULT_MEASURE;
  const currency = props.currency || DEFAULT_CURRENCY;

  return (
    <Link href={`/menu/${id}`}>
      <Styled.Card>
        <Styled.CardContent>
          <Styled.Name>{name}</Styled.Name>
          <Styled.Description>{description}</Styled.Description>
          <Styled.Volume>
            {volume === null ? '-' : `${volume} ${measure}`}
          </Styled.Volume>
          <Styled.Price>
            {price === null ? '-' : `${price} ${currency}`}
          </Styled.Price>
        </Styled.CardContent>
        <Styled.ImgWrapper>
          <ProductImage {...(props.img || {})} alt={name} />
        </Styled.ImgWrapper>
      </Styled.Card>
    </Link>
  );
};
