import React, { FC, ReactNode } from 'react';
import Link from 'next/link';
import { Icon } from '@/ui-kit';
import {
  DEFAULT_CURRENCY,
  DEFAULT_MEASURE,
} from '@/pageComponents/Nftea/constants/product';
import * as Styled from './styles';
import { milks, spums, syrops, toppings } from './constants';
import { Extension, ProductInfoProps } from './types';
import { ProductImage } from '../ProductImage';

const renderExtensions = (title, extensions: Extension[]): ReactNode => {
  return (
    <Styled.Baloon>
      <Styled.ExtTitle>{title}</Styled.ExtTitle>
      <Styled.ExtList>
        {extensions.map((item) => (
          <Styled.ExtListItem key={item.id}>
            <span>{item.name}</span>
            <span>{`${item.price} ${item.currency || DEFAULT_CURRENCY}`}</span>
          </Styled.ExtListItem>
        ))}
      </Styled.ExtList>
    </Styled.Baloon>
  );
};

export const ProductInfo: FC<ProductInfoProps> = (props) => {
  const { name, description, volume, price } = props;

  const measure = props.measure || DEFAULT_MEASURE;
  const currency = props.currency || DEFAULT_CURRENCY;

  return (
    <Styled.Wrapper>
      <Link href={'/menu'}>
        <Styled.BackLink>
          <Icon name="rightArrow" />К списку напитков
        </Styled.BackLink>
      </Link>

      <Styled.ContentWrapper>
        <Styled.Card>
          <Styled.ImgWrapper>
            <ProductImage {...(props.img || {})} alt={name} size="large" />
          </Styled.ImgWrapper>
          <Styled.CardContent>
            <Styled.Name>{name}</Styled.Name>
            <Styled.Description>{description}</Styled.Description>
            {volume && <Styled.Volume>{`${volume} ${measure}`}</Styled.Volume>}
            {price && <Styled.Price>{`${price} ${currency}`}</Styled.Price>}
          </Styled.CardContent>
        </Styled.Card>

        <Styled.ExtSection>
          <Styled.SubTitle>Добавь в напиток</Styled.SubTitle>
          <Styled.ExtWrapper>
            {renderExtensions('Топпинги', toppings)}
            {renderExtensions('Сиропы', syrops)}
            {renderExtensions('Спума', spums)}
            {renderExtensions('Молоко', milks)}
            {renderExtensions('Фруктовое желе', milks)}
          </Styled.ExtWrapper>
        </Styled.ExtSection>
      </Styled.ContentWrapper>
    </Styled.Wrapper>
  );
};
