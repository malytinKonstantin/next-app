import { type PriceTextProps } from './types';

export const defaultProps: PriceTextProps = {
  underline: false,
  deleted: false,
  block: false,
  size: 'middle',
  align: 'left',
  children: 18_000,
  currency: '₽',
};
