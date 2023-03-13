import React from 'react';
import { Styled } from '@/pageComponents/Nftea/pages/support';
import { PageWrapper } from '@/pageComponents/Nftea/components';
import { Input } from '@/ui-kit/Input';
import { Button } from '@/ui-kit/Button';

const SupportPage = () => {
  return (
    <PageWrapper>
      <Styled.Form>
        <Input label="ФИО" placeholder="Иванов Иван Иванович" mb={24} />
        <Input label="Телефон" placeholder="+7 (999) 999-99-99" mb={24} />
        <Input
          label="Электронный адрес"
          placeholder="example@mail.ru"
          mb={24}
        />
        <Input label="Сообщение" placeholder="Твое сообщение" mb={24} />
        <Button type="primary" block>
          Отправить
        </Button>
      </Styled.Form>
    </PageWrapper>
  );
};

export default SupportPage;
