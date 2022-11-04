import { css, Theme } from '@emotion/react';

export const globalStyle = (theme: Theme) => {
  const { componentBackgroundColor } = theme;

  return css`
    h1,
    h2,
    h3,
    h4 {
      line-height: 1.25;
    }

    h3 {
      font-size: 1.3rem;
    }
    p {
      font-size: 1.2rem;
    }

    input {
      background: ${componentBackgroundColor};
      outline: none;
      font-size: 1.5rem;
    }
  `;
};
