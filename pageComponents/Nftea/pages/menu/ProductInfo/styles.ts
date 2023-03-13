import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Color, FontFamily, FontWeight } from '@/ui-kit/@constants';

export const Wrapper = styled.div(() => {
  return css`
    @media (min-width: 1440px) {
      max-width: 1408px;
      margin: 0 auto;
    }
  `;
});

export const ContentWrapper = styled.div(() => {
  return css`
    padding-top: 48px;

    @media (min-width: 1440px) {
      display: flex;
      justify-content: space-between;
    }
  `;
});

export const BackLink = styled.a(() => {
  return css`
    display: flex;
    align-items: center;
    font-family: 'Halvar Mittelschrift';
    font-style: normal;
    font-weight: ${FontWeight.w500};
    font-size: 16px;
    line-height: 28px;

    letter-spacing: 0.02em;
    text-decoration: underline;

    color: ${Color.NFTea.Purple_Sugar_100};
    cursor: pointer;

    > * svg {
      fill: currentColor;
      transform: rotate(180deg);
    }
  `;
});

export const Card = styled.div(() => {
  return css`
    width: 320px;
    margin: 0 auto;
    text-align: center;
    padding-top: 8px;

    @media (min-width: 1024px) {
      display: flex;
      width: 435px;
    }
  `;
});

export const CardContent = styled.div(() => {
  return css`
    padding: 0 64px;
  `;
});

export const ImgWrapper = styled.div(() => {
  return css`
    width: 100%;
    height: 195px;
    margin-bottom: 32px;
  `;
});

export const Name = styled.h1(() => {
  return css`
    margin: 0;
    margin-bottom: 12px;
    font-family: ${FontFamily.HalvarMittelschrift};
    font-style: normal;
    font-weight: ${FontWeight.w700};
    font-size: 32px;
    line-height: 40px;

    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.02em;

    color: ${Color.NFTea.Purple_Sugar_100};

    @media (min-width: 1024px) {
      text-align: left;
    }
  `;
});

export const Description = styled.p(() => {
  return css`
    min-height: 55px;
    margin: 0 auto;

    font-family: ${FontFamily.HalvarMittelschrift};
    font-style: normal;
    font-weight: ${FontWeight.w500};
    font-size: 16px;
    line-height: 28px;

    text-align: center;
    letter-spacing: 0.02em;

    color: ${Color.NFTea.Black_BO_100};

    @media (min-width: 1024px) {
      text-align: left;
    }
  `;
});

export const Volume = styled.p(() => {
  return css`
    margin: 8px 0 0;

    font-family: ${FontFamily.HalvarMittelschrift};
    font-style: normal;
    font-weight: ${FontWeight.w500};
    font-size: 16px;
    line-height: 28px;

    text-align: center;
    letter-spacing: 0.02em;

    color: ${Color.NFTea.Purple_Sugar_100};

    @media (min-width: 1024px) {
      text-align: left;
    }
  `;
});

export const Price = styled.p(() => {
  return css`
    margin: 0;
    font-family: ${FontFamily.HalvarMittelschrift};
    font-style: normal;
    font-weight: ${FontWeight.w700};
    font-size: 24px;
    line-height: 32px;

    text-align: center;
    letter-spacing: 0.02em;

    color: ${Color.NFTea.OrangeTea};

    @media (min-width: 1024px) {
      text-align: left;
    }
  `;
});

export const SubTitle = styled.h2(() => {
  return css`
    margin: 48px auto 0;
    font-family: ${FontFamily.HalvarBreitschrift};
    font-style: normal;
    font-weight: ${FontWeight.w700};
    font-size: 24px;
    line-height: 32px;

    text-align: center;
    letter-spacing: 0.02em;

    color: ${Color.NFTea.Purple_Sugar_100};

    @media (min-width: 1024px) {
      width: 100%;
      margin-top: 80px;
    }

    @media (min-width: 1440px) {
      margin-top: 0;
    }
  `;
});

export const Baloon = styled.div(() => {
  return css`
    margin-top: 32px;
    padding: 16px 8px;

    background: ${Color.NFTea.Black_BO_02};
    border-radius: 16px;

    @media (min-width: 1024px) {
      width: calc(50% - 16px);
    }
  `;
});

export const ExtSection = styled.section(() => {
  return css``;
});

export const ExtWrapper = styled.div(() => {
  return css`
    @media (min-width: 1024px) {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  `;
});

export const ExtTitle = styled.h3(() => {
  return css`
    margin: 0 0 16px;
    font-family: ${FontFamily.HalvarBreitschrift};
    font-style: normal;
    font-weight: ${FontWeight.w500};
    font-size: 17px;
    line-height: 22px;

    text-align: center;
    letter-spacing: 0.02em;

    color: ${Color.NFTea.Purple_Sugar_100};
  `;
});

export const ExtList = styled.ul(() => {
  return css`
    margin: 0;
    padding: 0 8px;
    list-style: none;
    padding: 0 24px;
  `;
});

export const ExtListItem = styled.li(() => {
  return css`
    display: flex;
    justify-content: space-between;

    border-bottom: 1px solid ${Color.NFTea.Black_BO_10};
    padding: 4px 0;
    max-width: 350px;
    margin: 0 auto;

    :nth-last-of-type(1) {
      border-bottom: none;
    }
  `;
});
