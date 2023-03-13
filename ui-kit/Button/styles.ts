import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { rotateAnimation } from '@/ui-kit/@constants';
import { ComponentSize } from '@/ui-kit/@types';
import { Wrapper as Icon } from '@/ui-kit/Icon/styles';
import { UiKitTheme } from '@/ui-kit/@themes';
import { FontFamily } from '@/ui-kit/@constants/font';
import { defaultProps } from './Button.defaultProps';
import { ButtonProps } from './types';
import { getStylesByButtonSize, getStylesByButtonType } from './utils';

export interface StyledButtonProps extends ButtonProps {
  isLoading: boolean;
}

export const Button = styled.button<StyledButtonProps>((props) => {
  const {
    size,
    disabled = defaultProps.disabled,
    block = defaultProps.block,
    mb = defaultProps.mb,
    theme,
  } = props;

  const buttonTheme = (theme as UiKitTheme).button;

  const stylesByType = getStylesByButtonType(props, buttonTheme);

  const stylesBySize = getStylesByButtonSize(props, buttonTheme);

  const marginRight = size === ComponentSize.small ? 4 : 8;

  return css`
    border: none;
    border: 2px solid transparent;
    ${stylesByType}
    ${stylesBySize}
    font-family: ${FontFamily.SFProDisplay};

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: ${mb}px;

    cursor: pointer;
    transition: 0.3s;
    backdrop-filter: blur(80px);

    ${Icon} {
      margin-top: -4px;
      margin-right: ${marginRight}px;
      margin-bottom: -4px;
    }

    ${disabled &&
    `
      cursor: not-allowed;
    `}

    ${block &&
    `
       width: 100%;
    `}

    & svg path {
      fill: currentColor;
    }
  `;
});

type SpinProps = Pick<ButtonProps, 'size' | 'type' | 'icon'> & {
  isLoading?: boolean;
};

export const Spin = styled.span<SpinProps>((props) => {
  const { isLoading, size, type, theme } = props;
  const { border, borderLeft } = (theme as UiKitTheme).button.spin[type!];

  if (!isLoading) {
    return css``;
  }

  let width = 0;
  let marginRight = size === ComponentSize.small ? 8 : 12;

  if (isLoading) {
    width = 18;
  } else {
    marginRight = 0;
  }

  const stylesByType = css`
    border: 2px solid ${border.color};
    border-left-color: ${borderLeft.color};
  `;

  return css`
    display: inline-flex;
    overflow: hidden;

    width: ${width}px;

    margin-right: ${marginRight}px;

    transition: 0.3s;
    animation: spin 1.1s linear infinite;

    ${rotateAnimation}
    span {
      width: ${width}px;
      height: ${width}px;

      border-radius: 50%;
      background-color: transparent;
      ${stylesByType}
    }
  `;
});
