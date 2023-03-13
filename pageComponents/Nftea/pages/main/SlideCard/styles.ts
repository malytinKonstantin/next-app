import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { SlideCardProps } from './types';
import { Color, FontFamily, FontWeight } from '@/ui-kit/@constants';

export const Card = styled.div<Pick<SlideCardProps, 'img'>>((props) => {
  const { img } = props;

  return css`
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 132px;

    padding: 24px;

    border-radius: 24px;

    ${img && `background: url('${img}')`};
    background-repeat: no-repeat;
    background-color: ${Color.NFTea.Black_BO_02};
    background-size: auto 114px;
    background-position: center right 24px;

    @media (min-width: 720px) {
      height: 260px;

      background-size: auto 212px;
      background-position: center right 64px;
    }

    @media (min-width: 1024px) {
      height: 353px;

      background-size: auto 273px;
      background-position: center right 64px;
    }

    @media (min-width: 1440px) {
      height: 590px;

      background-size: auto 373px;
      background-position: center right 80px;
    }
  `;
});

export const Title = styled.p(() => {
  return css`
    font-family: ${FontFamily.HalvarBreitschrift};
    font-style: normal;
    font-weight: ${FontWeight.w500};
    font-size: 17px;
    line-height: 22px;
    letter-spacing: 0.04em;
    color: ${Color.NFTea.Purple_Sugar_100};

    @media (min-width: 720px) {
      font-weight: ${FontWeight.w700};
      font-size: 32px;
      line-height: 40px;
      letter-spacing: 0.02em;
    }

    @media (min-width: 1024px) {
      font-size: 48px;
      line-height: 56px;
    }

    @media (min-width: 1440px) {
      font-size: 72px;
      line-height: 88px;
    }
  `;
});
