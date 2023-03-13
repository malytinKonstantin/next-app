import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Color } from '@/ui-kit/@constants';

export const Wrapper = styled.div(() => {
  return css`
    margin-top: 36px;
    padding-bottom: 20px;

    .slick-dots {
      bottom: -20px;
    }

    .slick-dots > li,
    .slick-dots > li > button {
      content: '';
      width: 8px;
      height: 8px;
    }

    .slick-dots > li > button::before {
      content: '';
      width: 8px;
      height: 8px;
      background-color: ${Color.NFTea.Black_BO_05};
      border-radius: 50%;
      opacity: 1;
    }

    .slick-dots > .slick-active > button::before {
      background-color: ${Color.NFTea.Purple_Sugar_100};
    }

    @media (min-width: 720px) {
      margin-top: 74px;
    }

    @media (min-width: 1024px) {
      margin-top: 84px;
    }

    @media (min-width: 1440px) {
      margin-top: 120px;
      padding-bottom: 36px;

      .slick-dots {
        bottom: -36px;
      }
    }
  `;
});
