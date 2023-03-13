import styled from '@emotion/styled';
import { FontFamily } from '@/ui-kit/@constants/font';
import { type TextProps, type TextSize } from './types';
import { css, SerializedStyles } from '@emotion/react';
import { defaultProps } from './Text.defaultProps';

const SizeToStyle: Record<TextSize, SerializedStyles> = {
  ['small']: css`
    font-family: ${FontFamily.SFProText};
    font-size: 12px;
    line-height: 18px;
  `,
  ['middle']: css`
    font-family: ${FontFamily.SFProText};
    font-size: 16px;
    line-height: 28px;
  `,
};

export const Text = styled.span<TextProps>((props) => {
  const {
    underline,
    deleted,
    strong,
    block,
    align = defaultProps.align,
    size = defaultProps.size,
  } = props;

  return css`
    display: ${block ? 'block' : 'inline'};
    ${SizeToStyle[size!]}
    font-weight: ${strong ? '700' : '500'};

    text-align: ${align};
    ${underline && 'text-decoration: underline'}
    ${deleted && 'text-decoration: line-through'}
  `;
});
