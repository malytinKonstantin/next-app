import React, { FC, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import LogoIcon from '@/public/nftea/icons/logo.svg';
import DownloadAppStoreIcon from '@/public/nftea/icons/download-app-store.svg';
import { useScrollY } from '@/hooks';
import { Divider } from '@/pageComponents/Nftea/ui-kit';
import { routes } from './routes';
import { Row } from '@/ui-kit/Grid';

import { Title } from '@/pageComponents/Nftea/ui-kit';
import * as Styled from './styles';
import { PageWrapperProps } from './types';
import { Color } from '@/ui-kit/@constants';

export const PageWrapper: FC<PageWrapperProps> = (props) => {
  const { noPadding, children } = props;
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const y = useScrollY();

  const route = routes.find((r) => r.path === router.pathname);

  const { title, subTitle } = route || {};

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isMainPage = router.pathname === '/';

  return (
    <Styled.Wrapper>
      <Styled.Header y={y} isOpen={isOpen}>
        <Styled.Container>
          <Styled.Nav>
            <Styled.Burger onClick={toggleMenu}>
              <Styled.BurgerLine index={1} isOpen={isOpen} />
              <Styled.BurgerLine index={2} isOpen={isOpen} />
              <Styled.BurgerLine index={3} isOpen={isOpen} />
            </Styled.Burger>

            <Styled.Menu isOpen={isOpen}>
              {routes.map((route) => {
                const isActive = route.path === router.pathname;
                return (
                  <Styled.MenuItem key={route.path} isActive={isActive}>
                    <Link href={route.path}>{route.title}</Link>
                  </Styled.MenuItem>
                );
              })}
            </Styled.Menu>
            <Link href="/">
              <Styled.LogoWrapper y={y} isOpen={isOpen}>
                <LogoIcon />
              </Styled.LogoWrapper>
            </Link>
          </Styled.Nav>
        </Styled.Container>
      </Styled.Header>

      <Styled.Main>
        <Styled.Container noPadding={noPadding}>
          {isMainPage ? (
            <Styled.MainLogoWrapper>
              <LogoIcon />
            </Styled.MainLogoWrapper>
          ) : (
            title && <Title>{title}</Title>
          )}
          {subTitle && <Styled.SubTitle>{subTitle}</Styled.SubTitle>}
          {children}
        </Styled.Container>
      </Styled.Main>

      <Styled.Footer>
        <Styled.Container>
          <Row justify="center">
            <Styled.CopyRight>© NFTea</Styled.CopyRight>
          </Row>

          <Divider color={Color.NFTea.Black_BO_65} />

          <Row justify="center">
            <Styled.PolicyLink
              href="https://nftea.su/privacypolicy/"
              target="_blank"
            >
              Политика конфиденциальности
            </Styled.PolicyLink>
          </Row>

          <Divider color={Color.NFTea.Black_BO_65} />

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
      </Styled.Footer>
    </Styled.Wrapper>
  );
};
