import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { DividerProps } from './types';

export const Wrapper = styled.div<DividerProps>(() => {
  return css`
    width: 100%;
    height: 1px;
  `;
});

export const Hr = styled.div<Pick<DividerProps, 'color'>>((props) => {
  const { color } = props;
  return css`
    width: 100%;
    height: 100%;

    background-color: ${color};
  `;
});
