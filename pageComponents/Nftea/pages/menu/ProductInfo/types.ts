import { Product } from '@/pageComponents/Nftea/globalTypes';

export interface ProductInfoProps extends Product {}

export interface Extension {
  id: string;
  name: string;
  price: number;
  currency?: string;
}
