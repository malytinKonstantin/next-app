import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Form = styled.form(() => {
  return css`
    width: 100%;
    margin-top: 45px;

    @media (min-width: 720px) {
      width: 288px;
      margin: 0 auto;
      margin-top: 48px;
    }

    @media (min-width: 1024px) {
      width: 464px;
      margin-top: 56px;
    }

    @media (min-width: 1440px) {
      width: 672px;
      margin-top: 32px;
    }
  `;
});
