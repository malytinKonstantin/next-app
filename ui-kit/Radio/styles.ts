import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { RadioProps } from './types';
import { Color } from '@/ui-kit/@constants';

type WrapperProps = { mb: number };
export const Wrapper = styled.div<WrapperProps>((props) => {
  const { mb } = props;

  return css`
    display: inline-block;
    margin-bottom: ${mb}px;
  `;
});

type LabelProps = Pick<RadioProps, 'checked' | 'disabled' | 'error'>;
export const Label = styled.label<LabelProps>((props) => {
  const { disabled, error } = props;

  const colorMap = {
    disabled: Color.foodCity.Black_Oven_35,
    error: Color.foodCity.Red_Tomato,
    default: Color.foodCity.Black_Oven,
  };

  let color: string = colorMap.default;

  if (disabled) {
    color = colorMap.disabled;
  }

  if (error) {
    color = colorMap.error;
  }

  return css`
    display: flex;
    align-items: center;
    column-gap: 12px;
    color: ${color};
    cursor: pointer;
  `;
});

type DotProps = Pick<RadioProps, 'checked' | 'disabled' | 'error'>;
export const Dot = styled.span<DotProps>((props) => {
  const { checked, disabled, error } = props;

  const borderColorMap = {
    checked: Color.foodCity.Black_Oven,
    disabled: Color.foodCity.Black_Oven_10,
    error: Color.foodCity.Red_Tomato,
    default: Color.foodCity.Black_Oven_35,
  };

  const bgColorMap = {
    disabled: Color.foodCity.Black_Oven_05,
    error: Color.foodCity.Red_Tomato_05,
    default: Color.foodCity.White,
  };

  const dotBgColorMap = {
    disabled: Color.foodCity.Black_Oven_35,
    error: Color.foodCity.Red_Tomato,
    default: Color.foodCity.Black_Oven,
  };

  let borderColor: string = borderColorMap.default;
  let bgColor: string = bgColorMap.default;
  let dotBgColor: string = dotBgColorMap.default;

  if (checked) {
    borderColor = borderColorMap.checked;
  }

  if (disabled) {
    borderColor = borderColorMap.disabled;
    bgColor = bgColorMap.disabled;
    dotBgColor = dotBgColorMap.disabled;
  }

  if (error) {
    borderColor = borderColorMap.error;
    bgColor = bgColorMap.error;
    dotBgColor = dotBgColorMap.error;
  }

  const dotOpacity = checked || error ? 1 : 0;

  const boxShadow =
    checked && !disabled && !error && 'box-shadow: 0px 4px 15px 0px #09090A40';

  const hoverLabel =
    !error &&
    css`
      border-color: ${Color.foodCity.Black_Oven};
    `;

  return css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid ${borderColor};
    width: 24px;
    height: 24px;
    padding: 4px;
    border-radius: 50%;
    background-color: ${bgColor};
    ${boxShadow};

    &::before {
      content: '';
      flex-grow: 1;
      width: 100%;
      height: 100%;
      display: block;
      border-radius: 50%;
      opacity: ${dotOpacity};
      background-color: ${dotBgColor};
      transition: opacity 0.2s ease-out;
    }

    &:hover:not([disabled]) {
      ${hoverLabel};
    }
  `;
});

export const Input = styled.input(() => {
  return css`
    display: none;
  `;
});
