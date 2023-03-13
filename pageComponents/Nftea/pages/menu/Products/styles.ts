import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Color, FontFamily, FontWeight } from '@/ui-kit/@constants';

export const ProductsList = styled.ul(() => {
  return css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    margin-bottom: 16px;
    padding: 0;
    padding-bottom: 8px;

    list-style: none;

    @media (min-width: 720px) {
      margin-top: 48px;
    }

    @media (min-width: 1024px) {
      justify-content: start;
    }
  `;
});

export const ProductsItem = styled.li(() => {
  return css`
    display: flex;
    flex-direction: column;

    width: calc(50% - 8px);

    margin-bottom: 24px;
    padding: 0;

    @media (min-width: 720px) {
      width: calc(50% - 12px);
    }

    @media (min-width: 1024px) {
      width: calc(25% - 32px);
      margin-left: 16px;
      margin-right: 16px;
      margin-bottom: 32px;
    }
  `;
});

export const SubTitle = styled.h2(() => {
  return css`
    margin: 16px 0 24px;
    font-family: ${FontFamily.HalvarBreitschrift};
    font-style: normal;
    font-weight: ${FontWeight.w700};
    font-size: 24px;
    line-height: 32px;

    text-align: center;
    letter-spacing: 0.04em;

    color: ${Color.NFTea.Purple_Sugar_100};

    @media (min-width: 720px) {
      margin-top: 32px;
    }

    @media (min-width: 1440px) {
      margin-top: 48px;
    }
  `;
});
