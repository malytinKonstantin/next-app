import { css } from '@emotion/react';

export const global = css`
  /* SF Pro */
  @font-face {
    font-family: 'SF Pro';
    src: url('./fonts/SF-Pro/SF-Pro.ttf');
  }

  /* @font-face {
  font-family: 'SF Pro';
  src: url('./fonts/SF-Pro/SF-Pro-Italic.ttf');
  font-style: italic;
} */

  /* SF Pro Text */
  @font-face {
    font-family: 'SF Pro Text';
    src: url('./fonts/SF-Pro-Text/SF-Pro-Text-Regular.otf');
    font-weight: 400;
  }

  /* @font-face {
  font-family: 'SF Pro Text';
  src: url('./fonts/SF-Pro-Text/SF-Pro-Text-RegularItalic.otf');
  font-weight: 400;
  font-style: italic;
} */

  @font-face {
    font-family: 'SF Pro Text';
    src: url('./fonts/SF-Pro-Text/SF-Pro-Text-Medium.otf');
    font-weight: 500;
  }

  /* @font-face {
  font-family: 'SF Pro Text';
  src: url('./fonts/SF-Pro-Text/SF-Pro-Text-MediumItalic.otf');
  font-weight: 500;
  font-style: italic;
} */

  @font-face {
    font-family: 'SF Pro Text';
    src: url('./fonts/SF-Pro-Text/SF-Pro-Text-Semibold.otf');
    font-weight: 600;
  }

  /* @font-face {
  font-family: 'SF Pro Text';
  src: url('./fonts/SF-Pro-Text/SF-Pro-Text-SemiboldItalic.otf');
  font-weight: 600;
  font-style: italic;
} */

  @font-face {
    font-family: 'SF Pro Text';
    src: url('./fonts/SF-Pro-Text/SF-Pro-Text-Bold.otf');
    font-weight: 700;
  }

  /* @font-face {
  font-family: 'SF Pro Text';
  src: url('./fonts/SF-Pro-Text/SF-Pro-Text-BoldItalic.otf');
  font-weight: 700;
  font-style: italic;
} */

  /* SF Pro Display */
  @font-face {
    font-family: 'SF Pro Display';
    src: url('./fonts/SF-Pro-Display/SF-Pro-Display-Medium.otf');
    font-weight: 500;
  }

  @font-face {
    font-family: 'SF Pro Display';
    src: url('./fonts/SF-Pro-Display/SF-Pro-Display-MediumItalic.otf');
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: 'SF Pro Display';
    src: url('./fonts/SF-Pro-Display/SF-Pro-Display-Semibold.otf');
    font-weight: 600;
  }

  @font-face {
    font-family: 'SF Pro Display';
    src: url('./fonts/SF-Pro-Display/SF-Pro-Display-Semibold.otf');
    font-weight: 600;
    font-style: italic;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    font-family: 'SF Pro Text', sans-serif;
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
