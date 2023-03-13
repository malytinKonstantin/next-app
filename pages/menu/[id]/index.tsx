import React, { FC } from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { PageWrapper } from '@/pageComponents/Nftea/components';
import { ProductInfo, products } from '@/pageComponents/Nftea/pages/menu';
import { Product } from '@/pageComponents/Nftea/globalTypes';

interface MenuItemPageProps {
  product: Product;
}

const MenuItemPage: FC<MenuItemPageProps> = (props) => {
  const { product } = props;
  return (
    <PageWrapper>
      <ProductInfo {...product} />
    </PageWrapper>
  );
};

export default MenuItemPage;

export const getStaticPaths: GetStaticPaths<ParsedUrlQuery> = async () => {
  const paths = products.map((product) => ({
    params: { id: product.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<MenuItemPageProps> = async (
  args: GetStaticPropsContext<ParsedUrlQuery>,
) => {
  const { params } = args;

  if (!params) {
    return {
      notFound: true,
    };
  }

  const product = products.find((item) => item.id === params.id);
  if (!product) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      product,
    },
  };
};
