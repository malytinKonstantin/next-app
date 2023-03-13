import React from 'react';
import { Amount } from '@/components';
import { Title, Text } from '@/ui-kit/Typography';

export const Content = () => {
  return (
    <>
      <Title level={2} align="left">
        Адрес доставки
      </Title>
      <p>Россия, Москва, ул. Знаменка, д. 5, эт. 3, кв. 15.</p>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Text strong>Cумма заказа</Text>
        <Amount value={1500} />
      </div>
    </>
  );
};
