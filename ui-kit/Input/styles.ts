import { CSSProperties } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { InputBase } from '@/ui-kit/base/InputBase/styles';
import type { InputProps, ButtonProps } from './types';

const getCursor = (args: ButtonProps): CSSProperties['cursor'] => {
  if (args.disabled) {
    return 'not-allowed';
  }

  if (args.onClick) {
    return 'pointer';
  }

  return 'auto';
};

export const Input = styled.input<InputProps>((props) => {
  const { leftButton, rightButton } = props;

  const paddingLeft = leftButton ? 16 + 24 + 8 : 16;
  const paddingRight = rightButton ? 16 + 24 + 8 : 16;

  const css = InputBase(props);

  return `
    ${css.styles}
    width: 100%;
    padding-top: 13px;
    padding-bottom: 13px;
    padding-left: ${paddingLeft}px;
    padding-right: ${paddingRight}px;
    font-weight: 400;

    &:focus {
      outline: none;
    }
  `;
});

const ButtonBase = (props: ButtonProps) => {
  const { onClick } = props;

  const clickable = `
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      opacity: 0.75;
    }
  `;

  return css`
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0;
    padding: 0;

    cursor: ${getCursor(props)};

    border: none;
    background: transparent;

    line-height: 0;

    ${onClick && clickable}
  `;
};

export const LeftButton = styled.button<ButtonProps>((props) => {
  const css = ButtonBase(props);

  return `
    ${css.styles}
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
  `;
});

export const RightButton = styled.button<ButtonProps>((props) => {
  const css = ButtonBase(props);

  return `
    ${css.styles}
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
  `;
});
