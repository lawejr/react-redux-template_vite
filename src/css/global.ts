import { css } from '@emotion/react';
import { customProperties } from './customProperties';
import { media } from './mediaQueries';

export const globalStyles = css`
  ${customProperties};

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    outline: none;
  }

  html {
    height: 100%;
    overflow-y: scroll;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.285;
  }

  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    min-width: 320px;
    height: 100%;
    background: var(--PAGE_BG);
    color: var(--BLACK);
    font-family: 'Proba', sans-serif;
  }

  #app {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 100%;
    min-height: 100%;
  }

  .content-box {
    box-sizing: content-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a,
  button {
    cursor: pointer;
  }

  img {
    max-width: 100%;
  }

  p,
  figure {
    margin: 0;
  }

  [disabled] {
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-user-modify: read-only;
    appearance: none;
    margin: 0;
    user-select: none;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  select {
    appearance: none;
  }

  /* DESKTOP STYLES */

  @media ${media.fromDesktop} {
    html {
      font-size: 16px;
      line-height: 1.25;
    }

    #app {
      min-width: var(--DESKTOP_MIN_WIDTH);
    }
  }
`;
