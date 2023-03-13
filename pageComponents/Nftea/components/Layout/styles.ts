import styled from '@emotion/styled';

import { css } from '@emotion/react';
import { Color, FontFamily, FontWeight } from '@/ui-kit/@constants';
import { PageWrapperProps } from '@/pageComponents/Nftea/components/Layout/types';

const LogoSize = {
  MOBILE: 113,
  TABLE: 149,
};

export const Wrapper = styled.div(() => {
  return css`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  `;
});

export const Header = styled.header<{ y: number; isOpen: boolean }>((props) => {
  const { y, isOpen } = props;
  const boxShadow = '0px 0px 35px rgba(9, 9, 10, 0.1)';

  return css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transition: 0.3s;
    height: ${isOpen ? '100vh' : 'auto'};

    background: ${Color.foodCity.White};
    box-shadow: ${y > LogoSize.MOBILE ? boxShadow : 'none'};

    z-index: 999999;

    @media (min-width: 720px) {
      box-shadow: ${y > LogoSize.TABLE ? boxShadow : 'none'};
    }

    @media (min-width: 1024px) {
      height: ${isOpen ? '100vh' : '86px'};
    }
  `;
});

export const Nav = styled.nav(() => {
  return css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 56px;

    @media (min-width: 1024px) {
      justify-content: space-between;
      padding: 32px 16px;
      height: 100%;

      li {
        margin-bottom: 0;
      }
    }
  `;
});

export const Container = styled.div<Pick<PageWrapperProps, 'noPadding'>>(
  (props) => {
    const { noPadding } = props;
    return css`
      display: flex;
      flex-direction: column;
      max-width: 1800px;
      width: 100%;
      padding: ${noPadding ? 0 : '0 16px'};
      margin: 0 auto;

      @media (min-width: 720px) {
        padding: ${noPadding ? 0 : '0 24px'};
      }

      @media (min-width: 1024px) {
        padding: ${noPadding ? 0 : '0 32px'};
      }
    `;
  },
);

export const Main = styled.main(() => {
  return css`
    flex: 1 1 auto;
    width: 100%;
    height: 100%;
    padding-top: 73px;
    padding-bottom: 32px;
    overflow: hidden;
    position: relative;
    z-index: 1;

    background: ${Color.foodCity.White};

    @media (min-width: 720px) {
      padding-top: 100px;
    }

    @media (min-width: 1024px) {
      padding-top: 120px;
    }

    @media (min-width: 1920px) {
      width: 1440px;
      margin: 0 auto;
    }
  `;
});

export const LogoWrapper = styled.a<{ y: number; isOpen: boolean }>((props) => {
  const { y, isOpen } = props;

  return css`
    height: 22px;
    margin: 0;
    padding: 0;

    opacity: 1;
    // opacity: ${isOpen || y > LogoSize.MOBILE ? 1 : 0};
    transition: 0.7s;

    > svg {
      height: 18px;
    }

    @media (min-width: 720px) {
      opacity: 1;
      //opacity: ${y > LogoSize.TABLE ? 1 : 0};
    }

    @media (min-width: 1024px) {
      opacity: 1;
    }
  `;
});

export const MainLogoWrapper = styled.div(() => {
  return css`
    display: none;
    justify-content: center;
    margin-bottom: 16px;

    @media (min-width: 1024px) {
      display: flex;
      > svg {
        height: 74px;
      }
    }
  `;
});

export const SubTitle = styled.p(() => {
  return css`
    font-family: ${FontFamily.HalvarBreitschrift};
    font-style: normal;
    font-weight: ${FontWeight.w500};
    font-size: 16px;
    line-height: 28px;

    text-align: center;
    letter-spacing: 0.02em;

    color: ${Color.NFTea.Black_BO_100};

    @media (min-width: 1440px) {
      font-weight: ${FontWeight.w700};
    }
  `;
});

export const Burger = styled.button(() => {
  return css`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 16px;
    width: 24px;
    height: 14px;

    margin: 0;
    padding: 0;

    background: none;
    border: none;

    cursor: pointer;
    z-index: 999999;

    @media (min-width: 1024px) {
      display: none;
    }
  `;
});

export const BurgerLine = styled.span<{ index: number; isOpen: boolean }>(
  (props) => {
    const { index, isOpen } = props;

    const stylesByIndex = {
      [1]: css`
        top: 0;
        width: 20px;
        ${isOpen &&
        css`
          transform: rotate(45deg) translateY(8.5px);
          left: 2px;
        `};
      `,
      [2]: css`
        top: 6px;
        width: 18px;
        ${isOpen &&
        css`
          opacity: 0;
        `};
      `,
      [3]: css`
        top: 12px;
        width: 16px;
        ${isOpen &&
        css`
          width: 20px;
          transform: rotate(-45deg) translateY(-8.5px);
          left: 2px;
        `};
      `,
    };

    return css`
      position: absolute;
      left: 0;
      opacity: 1;
      transition: 0.333s;
      ${stylesByIndex[index]}
      height: 2px;
      background: #000;
      border-radius: 4px;
    `;
  },
);

interface MenuProps {
  isOpen: boolean;
}

export const Menu = styled.ul<MenuProps>((props) => {
  const { isOpen } = props;

  return css`
    position: absolute;
    top: 56px;
    left: -16px;
    width: calc(100% + 32px);
    height: ${isOpen ? 'calc(100vh - 56px)' : 0};
    padding: 16px;
    margin: 0;
    font-family: 'Halvar Breitschrift';
    font-weight: 500;

    background: ${Color.foodCity.White};

    list-style: none;
    opacity: ${isOpen ? 1 : 0};
    visibility: ${isOpen ? 'visible' : 'hidden'};
    transition: 0.333s;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 999999;

    a {
      line-height: 18px;
    }

    li {
      opacity: ${isOpen ? 1 : 0};
      margin-bottom: 12px;
    }

    @media (min-width: 1024px) {
      position: initial;
      flex-direction: row;
      justify-content: flex-end;

      width: auto;
      height: auto;

      padding: 0;

      opacity: 1;
      order: 1;
      visibility: visible;

      li {
        opacity: 1;

        &:nth-last-of-type(1) {
          margin-right: 0;
        }
      }
    }
  `;
});

export const MenuItem = styled.li<{ isActive: boolean }>((props) => {
  const { isActive } = props;

  return css`
    color: ${isActive ? Color.NFTea.Purple_Sugar_100 : Color.NFTea.Black_B0_35};
    font-family: ${FontFamily.HalvarBreitschrift};
    text-decoration: ${isActive ? 'underline' : 'none'};

    @media (min-width: 1024px) {
      margin-right: 48px;

      font-weight: ${FontWeight.w500};
      font-size: 17px;
      line-height: 22px;
      letter-spacing: 0.04em;
    }
  `;
});

export const CopyRight = styled.p(() => {
  return css`
    margin: 0;
    margin-bottom: 24px;
    padding: 0;

    font-family: ${FontFamily.HalvarBreitschrift};
    font-style: normal;
    font-weight: ${FontWeight.w700};
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0.02em;

    color: ${Color.foodCity.White};
  `;
});

export const PolicyLink = styled.a(() => {
  return css`
    margin: 24px 0;
    padding: 0;

    font-family: ${FontFamily.HalvarBreitschrift};
    font-style: normal;
    font-weight: ${FontWeight.w400};
    font-size: 17px;
    line-height: 22px;
    letter-spacing: 0.02em;

    color: ${Color.foodCity.White};
  `;
});

export const Apps = styled.div(() => {
  return css`
    width: 100%;
    height: 100%;
    margin-top: 24px;

    @media (min-width: 720px) {
      display: flex;
      justify-content: space-between;

      width: 448px;
    }
  `;
});

export const AppLink = styled.a(() => {
  return css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;

    margin: 0;
    margin-bottom: 12px;
    padding: 0;

    text-align: center;
    background-color: ${Color.NFTea.Black_BO_100};
    border: 1px solid ${Color.foodCity.White};
    border-radius: 24px;
    overflow: hidden;

    > svg {
      width: 100%;
      height: 100%;
    }

    > img {
      width: auto;
      height: 72px;
    }

    &:nth-last-child {
      margin-bottom: 0;
    }

    @media (min-width: 720px) {
      width: 208px;

      > img {
        height: 60px;
      }
    }
  `;
});

export const Footer = styled.footer(() => {
  return css`
    padding: 24px 0;
    background-color: ${Color.NFTea.Black_BO_100};
  `;
});
