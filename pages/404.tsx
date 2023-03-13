import React, { FC } from 'react';
import { PageWrapper } from '@/pageComponents/Nftea/components';
import { Title } from '@/pageComponents/Nftea/ui-kit';

const Error404: FC = (): JSX.Element => {
  return (
    <PageWrapper>
      <Title>Страница не найдена</Title>
    </PageWrapper>
  );
};

export default Error404;
