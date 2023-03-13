import { css } from '@emotion/react';

export const global = css`
  /* FONTS */

  @font-face {
    font-family: 'Halvar Breitschrift';
    src: url('/fonts/Halvar/Halvar Breitschrift Thin.ttf') format('truetype');
    font-weight: 300;
  }

  @font-face {
    font-family: 'Halvar Breitschrift';
    src: url('/fonts/Halvar/Halvar Breitschrift Regular.ttf') format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Halvar Breitschrift';
    src: url('/fonts/Halvar/Halvar Breitschrift Bold.ttf') format('truetype');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Halvar Mittelschrift';
    src: url('/fonts/Halvar/Halvar Mittelschrift Regular.ttf')
      format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Halvar Mittelschrift';
    src: url('/fonts/Halvar/Halvar Mittelschrift Bold.ttf') format('truetype');
    font-weight: 700;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    min-width: 320px;
    font-family: 'Halvar Mittelschrift', Helvetica, sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
  }

  a {
    text-decoration: none;

    color: inherit;
  }

  * {
    box-sizing: border-box;
  }
`;
