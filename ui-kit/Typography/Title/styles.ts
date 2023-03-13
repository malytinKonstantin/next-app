import styled from '@emotion/styled';
import { FontFamily } from '@/ui-kit/@constants/font';
import { css } from '@emotion/react';
import { UiKitTheme } from '@/ui-kit/@themes';
import { TitleProps } from './types';

const H_BASE_STYLE = css`
  font-family: ${FontFamily.SFPro};
  font-weight: 700;
  font-style: normal;
`;

export const H1 = styled.h1<TitleProps>((props) => {
  const { align = 'center', theme } = props;
  const { color } = (theme as UiKitTheme).title;

  return css`
    ${H_BASE_STYLE}
    color: ${color};
    font-size: 48px;
    line-height: 56px;

    text-align: ${align};
  `;
});

export const H2 = styled.h2<TitleProps>((props) => {
  const { align = 'center', theme } = props;
  const { color } = (theme as UiKitTheme).title;

  return css`
    ${H_BASE_STYLE}
    color: ${color};
    font-size: 32px;
    line-height: 40px;

    text-align: ${align};
  `;
});

export const H3 = styled.h3<TitleProps>((props) => {
  const { align = 'center', theme } = props;
  const { color } = (theme as UiKitTheme).title;

  return css`
    ${H_BASE_STYLE}
    color: ${color};
    font-size: 24px;
    line-height: 32px;

    text-align: ${align};
  `;
});

export const H4 = styled.h4<TitleProps>((props) => {
  const { align = 'center', theme } = props;
  const { color } = (theme as UiKitTheme).title;

  return css`
    text-align: ${align};

    color: ${color};

    font-family: ${FontFamily.SFProText};
    font-size: 17px;
    font-weight: 600;
    font-style: normal;
    line-height: 22px;
  `;
});
