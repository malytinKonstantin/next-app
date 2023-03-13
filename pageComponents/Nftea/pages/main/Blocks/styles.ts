import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/react';
import { Color } from '@/ui-kit/@constants/color';
import { FontFamily, FontWeight } from '@/ui-kit/@constants';

export const Wrapper = styled.div(() => {
  return css`
    width: 100%;
    margin-top: 40px;
  `;
});

interface CardProps {
  img?: string;
  type: 'menu' | 'app';
}

export const Card = styled.div<CardProps>((props) => {
  const { img, type } = props;

  const typeToStyle: Record<CardProps['type'], SerializedStyles> = {
    menu: css`
      background-size: auto 116px;
      background-position: center right;
    `,
    app: css`
      background-size: auto 172px;
      background-position: center right -25px;

      @media (min-width: 720px) {
        background-position: center right;
      }
    `,
  };

  return css`
    display: flex;
    flex-direction: column;
    justify-content: center;

    min-height: 132px;

    margin-top: 8px;
    padding: 24px;

    border-radius: 24px;

    ${img && `background: url('${img}')`};
    background-repeat: no-repeat;
    background-color: ${Color.NFTea.Black_BO_02};
    background-size: auto 116px;
    background-position: center right;
    ${typeToStyle[type].styles};
    :nth-of-type(1) {
      margin-top: 0;
    }

    @media (min-width: 720px) {
      height: 260px;
      margin-top: 16px;
      padding: 34px 64px;

      background-size: auto 220px;

      :nth-of-type(1) {
        margin-top: 0;
      }
    }

    @media (min-width: 1024px) {
      height: 353px;
      margin-top: 0;
      margin-bottom: 32px;
      padding: 53px 64px;

      :nth-last-of-type(1) {
        margin-bottom: 0;
      }

      background-size: auto 212px;
    }

    @media (min-width: 1440px) {
      height: 590px;
      padding: 108px 80px;

      background-size: auto 350px;
    }
  `;
});

export const CardTitle = styled.h2(() => {
  return css`
    display: block;
    width: 125px;
    margin: 0;

    color: ${Color.NFTea.Purple_Sugar_100};

    font-family: ${FontFamily.HalvarBreitschrift};
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 22px;

    letter-spacing: 0.04em;

    @media (min-width: 720px) {
      width: 230px;
      font-weight: 700;
      font-size: 32px;
      line-height: 40px;

      letter-spacing: 0.02em;
    }

    @media (min-width: 1024px) {
      width: 350px;
      font-size: 48px;
      line-height: 56px;
    }

    @media (min-width: 1440px) {
      width: 690px;
      font-size: 72px;
      line-height: 88px;
    }
  `;
});

export const Link = styled.a(() => {
  return css`
    display: none;
    margin: 0;
    font-family: ${FontFamily.HalvarBreitschrift};
    font-style: normal;
    font-weight: ${FontWeight.w500};
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.02em;
    color: ${Color.NFTea.OrangeTea};
    cursor: pointer;

    :hover {
      opacity: 0.5;
    }
    @media (min-width: 720px) {
      margin-top: 16px;
      display: block;
    }

    @media (min-width: 1024px) {
      margin-top: 24px;
      font-size: 16px;
      line-height: 28px;
    }

    @media (min-width: 1440px) {
      font-weight: ${FontWeight.w700};
      font-size: 24px;
      line-height: 32px;
      letter-spacing: 0.04em;
    }
  `;
});

export const AppButtonsWrapper = styled.div(() => {
  return css`
    @media (min-width: 720px) {
      display: flex;
    }
  `;
});

export const AppButton = styled.a(() => {
  return css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 106px;
    height: 40px;
    margin-top: 16px;
    margin-right: 32px;

    background: ${Color.NFTea.Black};

    border: 0.510304px solid ${Color.NFTea.White};
    border-radius: 16px;

    > svg {
      width: 95px;
      height: auto;
    }

    > img {
      width: 95px;
      height: auto;
    }
    cursor: pointer;

    @media (min-width: 720px) {
      width: 148px;
      height: 56px;

      > svg {
        width: 132px;
      }

      > img {
        width: 132px;
      }
    }
  `;
});
