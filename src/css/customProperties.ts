import { css } from '@emotion/react';
import { screenSizes } from './mediaQueries';

export const customProperties = css`
  :root {
    --DESKTOP_MIN_WIDTH: ${screenSizes.desktop}px;

    --BLACK: #242c34;
    --GRAY_80: #7f8389;
  }
`;
