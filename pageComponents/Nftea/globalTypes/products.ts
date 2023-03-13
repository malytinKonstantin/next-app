export enum ProdyctType {
  coffee = 'cofee',
  tea = 'tea',
  beverage = 'beverage',
}

export enum ProductImgType {
  TYPE1,
  TYPE2,
  TYPE3,
  TYPE4,
}

export interface ProductImg {
  lid: string;
  cup: string;
  type: ProductImgType;
}

export interface Product {
  id: string;
  img?: ProductImg;
  name: string;
  description: string;
  type: keyof typeof ProdyctType;
  volume: number | null;
  measure?: string;
  price: number | null;
  currency?: string;
}
