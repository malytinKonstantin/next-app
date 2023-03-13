import { css } from '@emotion/react';
import { ButtonProps, ButtonType } from './types';
import { ButtonTheme } from '../@themes';
import { ComponentSize } from '../@types';
import { StyledButtonProps } from './styles';

export const getStylesByButtonType = (
  props: StyledButtonProps,
  theme: ButtonTheme,
) => {
  const { disabled: isDisabled, type, isLoading } = props;
  const { disabled } = theme;
  const { normal, loading, hover, active } = theme[type!];

  const disabledStyle = css`
    &:hover,
    &:focus,
    &:active,
    & {
      color: ${disabled.color};
      background-color: ${disabled.backgroundColor};
      border-color: ${disabled.borderColor};
    }
  `;

  return css`
    color: ${isLoading ? loading.color : normal.color};
    background-color: ${isLoading
      ? loading.backgroundColor
      : normal.backgroundColor};
    border-color: ${isLoading ? loading.borderColor : normal.borderColor};

    &:hover {
      color: ${hover.color};
      background-color: ${hover.backgroundColor};
      border-color: ${hover.borderColor};
    }

    &:active {
      color: ${active.color};
      background-color: ${active.backgroundColor};
      border-color: ${active.borderColor};
    }

    ${isDisabled && disabledStyle}
  `;
};

export const getStylesByButtonSize = (
  props: ButtonProps,
  ButtonTheme: ButtonTheme,
) => {
  const { size, type = 'primary', disabled: isDisabled } = props;

  const defaultStyle = css`
    padding: 16px;
    border-radius: 16px;

    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
  `;

  switch (size) {
    case ComponentSize.small: {
      const { danger, ghost } = ButtonTheme.small;
      const stylesToType = {
        [ButtonType.primary]: css``,
        [ButtonType.secondary]: css``,
        [ButtonType.danger]: css`
          background-color: transparent;
          border-color: transparent;

          &:hover {
            color: ${danger.hover.color};
          }

          ${isDisabled &&
          css`
              &:hover,
              &:focus,
              &:active,
              & {
                color: ${danger.disabled.color};
            `}
        `,
        [ButtonType.ghost]: css`
          border-color: ${ghost.normal.borderColor};

          &:disabled {
            border-color: trasparent;
          }
        `,
      };

      const commonStyles = stylesToType[type];

      return css`
        ${commonStyles};
        padding: 8px 12px;

        border-radius: 13px;

        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
      `;
    }

    case ComponentSize.middle:
      return defaultStyle;
    case ComponentSize.large:
      return css``;
    default:
      return defaultStyle;
  }
};
