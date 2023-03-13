import React from 'react';
import { PageWrapper } from '@/pageComponents/Nftea/components';
import { Products, products } from '@/pageComponents/Nftea/pages/menu';

const MenuPage = () => {
  return (
    <PageWrapper>
      <Products items={products} />
    </PageWrapper>
  );
};

export default MenuPage;
