import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Color, FontFamily, FontWeight } from '@/ui-kit/@constants';

export const Card = styled.div(() => {
  return css`
    position: relative;

    min-height: 252px;
    height: 100%;

    margin-top: 37px;
    padding-top: 110px;
    padding-bottom: 8px;

    text-align: center;
    background-color: ${Color.NFTea.Black_BO_02};
    border-radius: 32px;
    cursor: pointer;

    @media (min-width: 720px) {
      min-height: 354px;
      margin-top: 69px;
      padding-top: 143px;
      padding-bottom: 24px;
    }
  `;
});

export const CardContent = styled.div(() => {
  return css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  `;
});

export const ImgWrapper = styled.div(() => {
  return css`
    position: absolute;
    top: -37px;
    left: 0;
    width: 100%;
    height: 137px;

    @media (min-width: 720px) {
      top: -69px;
      height: 195px;
    }
  `;
});

export const Img = styled.img(() => {
  return css`
    position: absolute;
    top: -37px;
    left: calc(50% - 39px);
    width: auto;
    height: 137px;

    @media (min-width: 720px) {
      top: -69px;
      left: calc(50% - 55.5px);
      height: 195px;
    }
  `;
});

export const Name = styled.p(() => {
  return css`
    height: 36px;
    width: 95px;
    margin: 0 auto 8px;

    font-family: ${FontFamily.HalvarMittelschrift};
    font-style: normal;
    font-weight: ${FontWeight.w500};
    font-size: 16px;
    line-height: 18px;

    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.02em;

    color: ${Color.NFTea.Purple_Sugar_100};

    @media (min-width: 720px) {
      height: 64px;
      width: 140px;

      font-weight: ${FontWeight.w700};
      font-size: 24px;
      line-height: 32px;
      letter-spacing: 0.04em;
    }
  `;
});

export const Description = styled.p(() => {
  return css`
    width: calc(100% - 40px);
    min-height: 55px;
    margin: 0 auto;

    font-family: ${FontFamily.HalvarMittelschrift};
    font-style: normal;
    font-weight: ${FontWeight.w500};
    font-size: 12px;
    line-height: 18px;

    text-align: center;
    letter-spacing: 0.02em;

    color: ${Color.NFTea.Black_BO_100};

    @media (min-width: 720px) {
      width: calc(100% - 85px);
      font-weight: ${FontWeight.w500};
      font-size: 16px;
      line-height: 28px;
      letter-spacing: 0.04em;
    }
  `;
});

export const Volume = styled.p(() => {
  return css`
    margin-top: auto;

    font-family: ${FontFamily.HalvarMittelschrift};
    font-style: normal;
    font-weight: ${FontWeight.w500};
    font-size: 12px;
    line-height: 18px;

    text-align: center;
    letter-spacing: 0.02em;

    color: ${Color.NFTea.Purple_Sugar_100};

    @media (min-width: 720px) {
      margin-bottom: 0;
      font-weight: ${FontWeight.w700};
      font-size: 16px;
      line-height: 28px;
      letter-spacing: 0.04em;
    }
  `;
});

export const Price = styled.p(() => {
  return css`
    margin: 0;
    font-family: ${FontFamily.HalvarMittelschrift};
    font-style: normal;
    font-weight: ${FontWeight.w700};
    font-size: 16px;
    line-height: 28px;

    text-align: center;
    letter-spacing: 0.02em;

    color: ${Color.NFTea.OrangeTea};

    @media (min-width: 720px) {
      font-weight: ${FontWeight.w700};
      font-size: 24px;
      line-height: 32px;
      letter-spacing: 0.04em;
    }
  `;
});
