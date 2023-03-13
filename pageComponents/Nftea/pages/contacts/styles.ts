import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Color, FontFamily, FontWeight } from '@/ui-kit/@constants';
import { Divider } from '@/pageComponents/Nftea/ui-kit/Divider/Divider';

export const Wrapper = styled.div(() => {
  return css`
    width: 100%;
    margin-top: 30px;

    @media (min-width: 720px) {
      margin-top: 24px;
    }

    @media (min-width: 1024px) {
      width: 464px;
      margin: 0 auto;
      margin-top: 32px;
    }

    @media (min-width: 1440px) {
      width: 672px;
      margin-top: 48px;
    }
  `;
});

export const Title = styled.p(() => {
  return css`
    margin-top: 16px;
    margin-bottom: 16px;
    font-family: ${FontFamily.HalvarBreitschrift};
    font-style: normal;
    font-weight: ${FontWeight.w500};
    font-size: 16px;
    line-height: 18px;

    letter-spacing: 0.02em;

    color: ${Color.NFTea.Purple_Sugar_100};

    @media (min-width: 1024px) {
      font-weight: ${FontWeight.w700};
      font-size: 16px;
      line-height: 28px;
      letter-spacing: 0.04em;
    }

    @media (min-width: 1440px) {
      font-size: 24px;
      line-height: 32px;
      letter-spacing: 0.04em;
    }
  `;
});

export const Text = styled.p(() => {
  return css`
    margin: 0;
    font-family: ${FontFamily.HalvarBreitschrift};
    font-style: normal;
    font-weight: ${FontWeight.w500};
    font-size: 12px;
    line-height: 18px;

    letter-spacing: 0.04em;

    color: ${Color.NFTea.Black_BO_100};
  `;
});

export const AcentText = styled.span(() => {
  return css`
    margin: 0;
    margin-right: 8px;
    font-family: ${FontFamily.HalvarBreitschrift};
    font-style: normal;
    font-weight: ${FontWeight.w700};
    font-size: 12px;
    line-height: 18px;

    letter-spacing: 0.04em;

    color: ${Color.NFTea.Black_BO_100};
  `;
});

export const Separator = styled(Divider)(() => {
  return css`
    margin-top: 8px;

    :nth-last-of-type(1) {
      margin-bottom: 0;
    }
  `;
});
