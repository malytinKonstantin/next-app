import { DetailedHTMLProps, HTMLAttributes } from 'react';

export enum ProductCardType {
  default = 'default',
  cart = 'cart',
}

export interface Product {
  id: string;
  name: string;
  img: string;
  price: {
    value: number;
    currency: string;
  };
  weight: {
    value: number;
    measure: string;
  };
}

export interface ProductCardProps
  extends Product,
    Omit<
      DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
      'id'
    > {
  type?: keyof typeof ProductCardType;
  setCount: (count: number) => Promise<void>;
  closeCard?: (id: string) => void;
}
