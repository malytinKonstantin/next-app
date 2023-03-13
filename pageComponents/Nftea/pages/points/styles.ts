import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Wrapper = styled.div(() => {
  return css`
    width: 100%;
    height: 100%;
    margin-bottom: -32px;
    margin-top: 34px;

    @media (min-width: 1024px) {
      display: flex;
      justify-content: space-between;

      height: 612px;
    }

    @media (min-width: 1440px) {
      width: 1366px;
      margin: 0 auto;
      margin-bottom: -32px;
      height: 600px;
    }

    @media (min-width: 1920px) {
      height: 694px;
    }
  `;
});
