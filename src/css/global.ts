import { css } from '@emotion/react';
import { media } from './mediaQueries';
import { customProperties } from './customProperties';

export const globalStyles = css`
  ${customProperties};

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    outline: none;
  }

  html {
    font-size: 14px;
    min-height: 100%;
    overflow-y: scroll;
  }

  body {
    background: var(--PAGE_BG);
    box-sizing: border-box;
    color: var(--BLACK);
    font-family: 'Proba', sans-serif;
    height: 100%;
    min-width: 320px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
  }

  #app {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    min-width: 100%;
    width: 100%;
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

  p {
    margin: 0;
  }

  [disabled] {
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
    user-select: none;
    -webkit-user-modify: read-only;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  select {
    appearance: none;
  }

  /* DESKTOP STYLES */

  @media ${media.fromDesktop} {
    #app {
      min-width: var(--DESKTOP_MIN_WIDTH);
    }
  }
`;
