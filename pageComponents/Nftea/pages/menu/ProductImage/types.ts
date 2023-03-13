import { ProductImg } from '@/pageComponents/Nftea/globalTypes';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ComponentSize } from '@/ui-kit/@types';

export type ProductImgSize = Extract<
  keyof typeof ComponentSize,
  'large' | 'middle'
>;

export interface ProductImageProps
  extends Partial<ProductImg>,
    DetailedHTMLProps<HTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  size?: ProductImgSize;
  alt: string;
}
