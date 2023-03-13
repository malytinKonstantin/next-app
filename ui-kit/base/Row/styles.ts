import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { RowProps } from './types';

export const Row = styled.div<RowProps>((props) => {
  const { mb, block } = props;

  const display = block ? 'flex' : 'inline-flex';

  return css`
    display: ${display};
    justify-content: space-between;
    align-items: center;
    column-gap: 8px;
    margin-bottom: ${mb}px;
    padding: 8px;
    border-radius: 16px;
  `;
});
