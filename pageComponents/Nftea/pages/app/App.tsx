import React from 'react';
import { Row } from '@/ui-kit/Grid';
import * as Styled from '@/pageComponents/Nftea/components/Layout/styles';
import { Divider } from '@/pageComponents/Nftea/ui-kit';
import { Color } from '@/ui-kit/@constants';
import DownloadAppStoreIcon from '@/public/nftea/icons/download-app-store.svg';

export const App = () => {
  return (
    <div style={{ padding: '70px 0', margin: 'auto' }}>
      <Styled.Container>
        <Row justify="center">
          <Styled.Apps>
            <Styled.AppLink
              target="_blank"
              href="https://apps.apple.com/app/id6444007549"
            >
              <DownloadAppStoreIcon />
            </Styled.AppLink>
            <Styled.AppLink
              target="_blank"
              href="https://play.google.com/store/apps/details?id=su.nftea.tea
"
            >
              <img src="/nftea/img/google-play-badge.png" />
            </Styled.AppLink>
          </Styled.Apps>
        </Row>
      </Styled.Container>
    </div>
  );
};
