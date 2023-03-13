import React, { FC } from 'react';
import { Product, ProdyctType } from '@/pageComponents/Nftea/globalTypes';
import * as Styled from './styles';
import { ProductCard } from './ProductCard';
import { ProductsProps } from './types';

const renderBlock = (
  title: string,
  items: Product[],
  productType: keyof typeof ProdyctType,
) => {
  return (
    <>
      <Styled.SubTitle>{title}</Styled.SubTitle>
      <Styled.ProductsList>
        {items.map((item) => {
          if (item.type !== productType) {
            return null;
          }

          return (
            <Styled.ProductsItem key={item.id}>
              <ProductCard {...item} />
            </Styled.ProductsItem>
          );
        })}
      </Styled.ProductsList>
    </>
  );
};

export const Products: FC<ProductsProps> = (props) => {
  const { items } = props;

  return (
    <>
      {renderBlock('Кофе', items, 'coffee')}
      {renderBlock('Чай', items, 'tea')}
      {renderBlock('Напитки', items, 'beverage')}
    </>
  );
};
