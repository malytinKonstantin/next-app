import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/react';
import { FontFamily } from '@/ui-kit/@constants/font';
import { defaultProps } from './PriceText.defaultProps';
import type { PriceTextProps, PriceTextSize } from './types';

const SizeToStyle: Record<PriceTextSize, SerializedStyles> = {
  ['extra-small']: css`
    font-family: ${FontFamily.SFProText};
    font-size: 13px;
    font-weight: 700;
    font-style: normal;
    line-height: 18px;
  `,
  ['small']: css`
    font-family: ${FontFamily.SFProText};
    font-size: 15px;
    font-weight: 700;
    font-style: normal;
    line-height: 18px;
  `,
  ['middle']: css`
    font-family: ${FontFamily.SFProText};
    font-size: 17px;
    font-weight: 700;
    font-style: normal;
    line-height: 18px;
  `,
  ['large']: css`
    font-family: ${FontFamily.SFProText};
    font-size: 20px;
    font-weight: 700;
    font-style: normal;
    line-height: 18px;
  `,
};

export const PriceText = styled.span<PriceTextProps>((props) => {
  const {
    underline,
    deleted,
    block,
    align = defaultProps.align,
    size = defaultProps.size,
  } = props;

  return css`
    display: ${block ? 'block' : 'inline'};
    ${SizeToStyle[size!]}
    text-align: ${align};
    ${underline && 'text-decoration: underline'}
    ${deleted && 'text-decoration: line-through'}
  `;
});
