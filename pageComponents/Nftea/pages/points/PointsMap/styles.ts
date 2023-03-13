import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Wrapper = styled.div(() => {
  return css`
    width: 100%;
    height: 440px;

    @media (min-width: 720px) {
      height: 596px;
    }

    @media (min-width: 1024px) {
      width: calc(100% - 280px);
      height: 100%;
    }

    @media (min-width: 1440px) {
      width: calc(100% - 352px);
    }
  `;
});
