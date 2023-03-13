import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FontFamily, FontWeight } from '@/ui-kit/@constants/font';
import { UiKitTheme } from '@/ui-kit/@themes';
import { ComponentSize } from '@/ui-kit/@types';
import { StepperProps } from '@/ui-kit/Stepper/types';
import { Icon } from '@/ui-kit';

type WrapperProps = Pick<StepperProps, 'mb' | 'size'>;

export const Wrapper = styled.div<WrapperProps>((props) => {
  const { size, mb, theme } = props;
  const { border: wrapperBorder } = (theme as UiKitTheme).stepper.wrapper;

  const widthMap = {
    [ComponentSize.small]: 91,
    [ComponentSize.middle]: 120,
    [ComponentSize.large]: 151,
  };

  const heightMap = {
    [ComponentSize.small]: 32,
    [ComponentSize.middle]: 64,
    [ComponentSize.large]: 56,
  };

  const border =
    size === ComponentSize.middle ? `2px solid ${wrapperBorder}` : '';

  return css`
    display: flex;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;
    width: ${widthMap[size!]}px;
    height: ${heightMap[size!]}px;
    margin-bottom: ${mb}px;
    padding: 0;

    border: ${border};
    border-radius: 16px;
  `;
});

type InputProps = { uiSize: StepperProps['size'] };
export const Input = styled.input<InputProps>(({ uiSize }) => {
  const maxWidthMap = {
    [ComponentSize.small]: 19,
    [ComponentSize.middle]: 24,
    [ComponentSize.large]: 43,
  };

  const heightMap = {
    [ComponentSize.small]: 24,
    [ComponentSize.middle]: 24,
    [ComponentSize.large]: 24,
  };

  const fontStyles = {
    [ComponentSize.small]: css`
      font-size: 13px;
      font-weight: ${FontWeight.w700};
      line-height: 18px;
    `,
    [ComponentSize.middle]: css`
      font-size: 16px;
      font-weight: ${FontWeight.w500};
      line-height: 28px;
    `,
    [ComponentSize.large]: css`
      font-size: 17px;
      font-weight: ${FontWeight.w600};
      line-height: 22px;
    `,
  };

  const marginHorizontal = uiSize === ComponentSize.middle ? 0 : 4;

  return css`
    flex-grow: 1;

    max-width: ${maxWidthMap[uiSize!]}px;
    height: ${heightMap[uiSize!]}px;
    margin: ${marginHorizontal}px;
    padding: 0;

    font-family: ${FontFamily.SFProText};
    ${fontStyles[uiSize!]}
    letter-spacing: -0.41px;

    color: inherit;
    background-color: transparent;
    border: none;

    text-align: center;

    &[disabled] {
      background-color: transparent;
    }

    &:focus,
    &:active,
    &:hover {
      outline: none;
    }

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      -moz-appearance: textfield;

      margin: 0;
    }
  `;
});

export const Spinner = styled(Icon)((props) => {
  const { theme } = props;
  const { stroke } = (theme as UiKitTheme).stepper.spinner;

  return css`
    svg {
      stroke: ${stroke};
    }
  `;
});

export const ButtonIcon = styled(Icon)`
  svg {
    fill: currentColor;
  }
`;

type ButtonProps = Pick<StepperProps, 'size'> & {
  selfDisabled?: boolean;
  isLoading?: boolean;
};
export const Button = styled.button<ButtonProps>((props) => {
  const { isLoading, size, selfDisabled, theme } = props;
  const { color, bg, loading, disabled, hover, active } = (theme as UiKitTheme)
    .stepper.button;
  const backgroundColor = isLoading ? loading.bg : bg;

  const paddingMap = {
    [ComponentSize.small]: '4px',
    [ComponentSize.middle]: '8px',
    [ComponentSize.large]: '16px 12px',
  };

  const borderRadius = {
    [ComponentSize.small]: 8,
    [ComponentSize.middle]: 10,
    [ComponentSize.large]: 16,
  };

  return css`
    padding: ${paddingMap[size!]};

    cursor: pointer;
    text-align: center;

    color: ${color};
    border: none;
    border-radius: ${borderRadius[size!]}px;
    background-color: ${backgroundColor};
    box-shadow: none;

    line-height: 0;

    ${selfDisabled &&
    `&[disabled] {
        color: ${disabled.color};
      }`}

    &:hover,
      &:focus,
      &:active {
      outline: none;
    }

    &:hover:not(:active, [disabled]) {
      color: ${hover.color};
    }

    &:active:not([disabled]) {
      color: ${active.color};
      background: ${active.bg};
    }
  `;
});
