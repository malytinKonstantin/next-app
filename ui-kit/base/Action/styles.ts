import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { FontFamily, FontWeight } from '@/ui-kit/@constants';
import { ComponentSize } from '@/ui-kit/@types';

interface ButtonProps {
  size: keyof typeof ComponentSize;
  mb: number;
}
export const Button = styled.button<ButtonProps>((props) => {
  const { size } = props;

  const fontStylesMap = {
    [ComponentSize.large]: css`
      font-weight: ${FontWeight.w400};
      font-size: 17px;
      line-height: 22px;
    `,
    [ComponentSize.middle]: css`
      font-weight: ${FontWeight.w500};
      font-size: 12px;
      line-height: 18px;
    `,
    [ComponentSize.small]: css`
      font-weight: ${FontWeight.w500};
      font-size: 12px;
      line-height: 18px;
    `,
  };

  return css`
    ${fontStylesMap[size]};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    font-family: ${FontFamily.SFProText};
    color: inherit;
    background-color: transparent;
    border: none;
    box-shadow: none;
    cursor: pointer;
  `;
});
