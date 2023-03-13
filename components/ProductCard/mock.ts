import { Product } from './types';

export const delay = (ms: number): Promise<void> =>
  new Promise((res) => {
    setTimeout(res, ms);
  });

let idCoint = 0;

export const generateProdictsItems = (count: number): Product[] => {
  return new Array(count).fill('').map((item, index) => {
    const id = `id-product-card-${idCoint}-${index}${item}`;
    const name = `Product #${index + 1}`;
    idCoint = idCoint + 100;

    return {
      id,
      name,
      img: `https://robohash.org/product-${id}`,
      price: {
        value: index ? index * 100 + index + 100 : 300,
        currency: '₽',
      },
      weight: {
        value: index + 1 * 10,
        measure: 'гр',
      },
    };
  });
};
