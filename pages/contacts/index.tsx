import React from 'react';
import { Styled } from '@/pageComponents/Nftea/pages/contacts';
import { PageWrapper } from '@/pageComponents/Nftea/components';

const ContactsPage = () => {
  return (
    <PageWrapper>
      <Styled.Wrapper>
        <Styled.Title>Головной офис</Styled.Title>
        <Styled.Text>
          <Styled.AcentText>Телефон:</Styled.AcentText> +7 (916) 092-95-55
        </Styled.Text>
        <Styled.Text>
          <Styled.AcentText>Режим работы:</Styled.AcentText> Пн-Пт: 10:00—18:00;
        </Styled.Text>
        <Styled.Separator />

        <Styled.Title>По вопросам франшизы</Styled.Title>
        <Styled.Text>
          <Styled.AcentText>Телефон:</Styled.AcentText> +7 (916) 092-95-55
        </Styled.Text>
        <Styled.Text>
          <Styled.AcentText>Режим работы:</Styled.AcentText> Пн-Пт: 10:00—18:00;
        </Styled.Text>
        <Styled.Separator />

        <Styled.Title>PR</Styled.Title>
        <Styled.Text>
          <Styled.AcentText>Телефон:</Styled.AcentText> +7 (916) 092-95-55
        </Styled.Text>
        <Styled.Text>
          <Styled.AcentText>Режим работы:</Styled.AcentText> Пн-Пт: 10:00—18:00;
        </Styled.Text>
        <Styled.Separator />
      </Styled.Wrapper>
    </PageWrapper>
  );
};

export default ContactsPage;
