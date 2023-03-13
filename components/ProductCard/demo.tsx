import { Title } from '@/ui-kit';
import React, { FC, useState } from 'react';
import { delay, generateProdictsItems } from './mock';
import { ProductCard } from './ProductCard';

const products = generateProdictsItems(10);

export const DemoProductCards: FC = () => {
  const [cartProducts, setCartProducts] = useState(products);

  const setCount = async () => await delay(300);

  const closeCard = (id) => {
    const updatedCartProducts = cartProducts.filter((item) => item.id !== id);
    setCartProducts(updatedCartProducts);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '50%' }}>
        <Title level={3}>Default Product Card</Title>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {products.map((item) => (
            <ProductCard
              key={item.id}
              {...item}
              style={{ margin: 5 }}
              setCount={setCount}
            />
          ))}
        </div>
      </div>

      <div style={{ width: '50%' }}>
        <Title level={3}>Cart Product Card</Title>
        <div>
          {cartProducts.map((item) => (
            <ProductCard
              key={item.id}
              {...item}
              style={{ margin: 5 }}
              type="cart"
              setCount={setCount}
              closeCard={closeCard}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
