import React from 'react';
import DownloadAppStoreIcon from '@/public/nftea/icons/download-app-store.svg';
import * as Styled from './styles';

export const Blocks = () => {
  return (
    <Styled.Wrapper>
      <Styled.Card type="menu" img="/nftea/img/main/MELONY.png">
        <Styled.CardTitle>Меню на любой вкус</Styled.CardTitle>
        <Styled.Link href="/menu">Открыть меню</Styled.Link>
      </Styled.Card>
      <Styled.Card type="app" img="/nftea/img/main/iPhone-14-Pro.png">
        <Styled.CardTitle>Скачивай наше приложение</Styled.CardTitle>
        <Styled.AppButtonsWrapper>
          <Styled.AppButton
            target="_blank"
            href="https://apps.apple.com/app/id6444007549"
          >
            <DownloadAppStoreIcon />
          </Styled.AppButton>
          <Styled.AppButton
            target="_blank"
            href="https://play.google.com/store/apps/details?id=su.nftea.tea"
          >
            <img src="/nftea/img/google-play-badge.png" />
          </Styled.AppButton>
        </Styled.AppButtonsWrapper>
      </Styled.Card>
    </Styled.Wrapper>
  );
};
