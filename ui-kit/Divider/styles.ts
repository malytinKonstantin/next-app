import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { UiKitTheme } from '@/ui-kit/@themes';
import { defaultProps } from './Divider.defaultProps';
import { DividerProps } from './types';

export const Wrapper = styled.div<DividerProps>((props) => {
  const { pl = defaultProps.pl } = props;

  return css`
    width: 100%;
    height: 1px;
    padding-left: ${pl}px;
  `;
});

export const Hr = styled.div<DividerProps>((props) => {
  const { theme } = props;
  const { bgColor } = (theme as UiKitTheme).divider;
  return css`
    width: 100%;
    height: 100%;

    background-color: ${bgColor};
  `;
});
