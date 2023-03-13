import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { FontFamily } from '@/ui-kit/@constants';
import { InputState } from './constants';
import { InputBaseProps, Validation, ValidationStatus } from './types';
import { UiKitTheme } from '@/ui-kit/@themes';

const getInputState = (
  validation?: Validation,
  disabled?: boolean,
): InputState => {
  if (disabled) {
    return InputState.disabled;
  }

  if (validation) {
    return validation.status === ValidationStatus.success
      ? InputState.success
      : InputState.error;
  }

  return InputState.default;
};

export const Wrapper = styled.div<{ mb?: number }>`
  width: 100%;
  margin-bottom: ${(props) => (props.mb ? props.mb : 0)}px;
`;

export const Label = styled.label<InputBaseProps>((props) => {
  const { required, theme } = props;
  const { color, requiredColor, fontFamily, styles } = (theme as UiKitTheme)
    .inputBase.label;

  return css`
    position: relative;
    display: block;

    margin-bottom: 8px;

    color: ${color};

    font-family: ${fontFamily};
    font-size: 17px;
    font-weight: 400;
    font-style: normal;
    line-height: 22px;

    &::after {
      position: absolute;
      top: 0;

      display: ${required ? 'inline' : 'none'};

      content: '*';

      color: ${requiredColor};

      font-size: 12px;
    }

    ${styles};
  `;
});

export const Message = styled.div<InputBaseProps>((props) => {
  const { validation, disabled, theme } = props;

  const inputState = getInputState(validation, disabled);
  const { color } = (theme as UiKitTheme).inputBase.message[inputState];

  return css`
    display: flex;
    align-items: flex-start;

    width: 100%;
    padding-top: 4px;

    color: ${color};

    font-size: 12px;
    line-height: 18px;
  `;
});

export const InputWrapper = styled.div<InputBaseProps>`
  position: relative;

  width: 100%;
`;

export const InputBase = (props: InputBaseProps) => {
  const { validation, disabled, theme } = props;

  const inputState = getInputState(validation, disabled);
  const { bg, borderColor, color, placeholderColor, focus, hover, styles } = (
    theme as UiKitTheme
  ).inputBase.input[inputState];
  const { fontFamily } = (theme as UiKitTheme).inputBase.input;

  return css`
    width: 100%;

    min-width: 240px;
    padding: 16px;

    cursor: ${disabled ? 'not-allowed' : 'inherit'};
    transition: 0.3s;

    color: ${color};
    border: 1px solid ${borderColor};
    border-radius: 16px;
    background-color: ${bg};

    font-family: ${fontFamily};
    font-size: 16px;
    line-height: 16px;

    &:hover {
      border: 1px solid ${hover.bg};
      background-color: ${hover.backgroundColor};
    }
    &:focus {
      color: ${focus.color};
      border: 1px solid ${focus.bg};
    }

    &,
    &:focus,
    &:focus-visible {
      outline: none;
    }

    &::placeholder {
      color: ${placeholderColor};
    }

    ${styles};
  `;
};
