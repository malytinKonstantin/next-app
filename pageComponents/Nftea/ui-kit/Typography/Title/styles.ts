import styled from '@emotion/styled';
import { TitleProps } from './types';
import { css } from '@emotion/react';
import { Color, FontFamily, FontWeight } from '@/ui-kit/@constants';

const H_BASE_STYLE = css`
  font-family: ${FontFamily.HalvarMittelschrift};
  font-style: normal;
  font-weight: ${FontWeight.w700};

  color: ${Color.NFTea.Purple_Sugar_100};
`;

export const H1 = styled.h1<TitleProps>((props) => {
  const { align = 'center', mb = 0 } = props;

  return css`
    ${H_BASE_STYLE.styles}
    font-family: ${FontFamily.HalvarBreitschrift};
    font-size: 32px;
    line-height: 40px;
    margin-bottom: ${mb}px;

    letter-spacing: 0.02em;

    text-align: ${align};

    @media (min-width: 1024px) {
      font-size: 48px;
      line-height: 56px;
    }

    @media (min-width: 1440px) {
      font-size: 72px;
      line-height: 72px;
    }
  `;
});

export const H2 = styled.h2<TitleProps>((props) => {
  const { align = 'center', mb = 0 } = props;

  return css`
    ${H_BASE_STYLE};
    font-size: 17px;
    line-height: 22px;
    margin-bottom: ${mb}px;

    letter-spacing: 0.04em;

    text-align: ${align};

    @media (min-width: 720px) {
      font-size: 32px;
      line-height: 40px;

      letter-spacing: 0.02em;
    }

    @media (min-width: 1440px) {
      font-size: 48px;
      line-height: 56px;
    }
  `;
});
