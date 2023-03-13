import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProductCard } from './ProductCard';
import { defaultProps } from './ProductCard.defaultProps';
import '@/styles/globals.css';
import { delay, generateProdictsItems } from './mock';

export default {
  title: 'ui-kit/ProductCard',
  component: ProductCard,
  argTypes: {},
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => (
  <ProductCard {...args} />
);

const setCount = async () => await delay(300);
export const DefaultProductCards = Template.bind({});
DefaultProductCards.args = {
  ...defaultProps,
  setCount,
  ...generateProdictsItems(1)[0],
};

export const CartProductCards = Template.bind({});
CartProductCards.args = {
  ...defaultProps,
  type: 'cart',
  setCount,
  ...generateProdictsItems(1)[0],
};
