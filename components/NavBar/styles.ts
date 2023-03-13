import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { FontFamily } from '@/ui-kit/@constants';
import { UiKitTheme } from '@/ui-kit/@themes/types';

export const Wrapper = styled.nav`
  padding: 12px 16px;
  box-sizing: border-box;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonWrapper = styled.div<{ isLeft?: boolean }>((props) => {
  const { isLeft } = props;

  return css`
    display: flex;
    justify-content: ${isLeft ? 'start' : 'end'};
    align-items: center;
    width: 20%;
  `;
});

export const Button = styled.button<{ isLeft?: boolean }>((props) => {
  const { isLeft } = props;
  return css`
    display: flex;
    justify-content: ${isLeft ? 'start' : 'end'};
    align-items: center;
    margin: 0;
    padding: 0;
    background: none;
    border: none;

    cursor: pointer;
  `;
});

export const CenterButton = styled.button((props) => {
  const { theme } = props;
  const { color, fill } = (theme as UiKitTheme).navBar.centerButton;

  return css`
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: ${color};

    cursor: pointer;

    > span > svg {
      width: 16px;
      height: 16px;
    }

    > svg,
    path {
      fill: ${fill};
    }
  `;
});

export const Caption = styled.span((props) => {
  const { theme } = props;
  const { color } = (theme as UiKitTheme).navBar.caption;
  return css`
    margin: 0 4px;
    font-family: ${FontFamily.SFProText};
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 22px;
    letter-spacing: -0.408px;

    color: ${color};
  `;
});

export const IconWrapper = styled.span((props) => {
  const { theme } = props;
  const { bg } = (theme as UiKitTheme).navBar.iconWrapper;

  return css`
  display: flex;
  justify-content: center
  align-items: center;
  padding: 8px;
  gap: 8px;

  width: 40px;
  height: 40px;

  background: ${bg};
  border-radius: 8px;

  * {
    fill: currentColor;
  }
`;
});

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
`;

export const Title = styled.p((props) => {
  const { theme } = props;
  const { color } = (theme as UiKitTheme).navBar.title;

  return css`
    font-family: ${FontFamily.SFProText};
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 22px;
    letter-spacing: -0.408px;
    margin: 0;

    color: ${color};
  `;
});
