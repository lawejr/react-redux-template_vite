import { css } from '@emotion/react';
import { screenSizes } from './mediaQueries';

export const customProperties = css`
  :root {
    --DESKTOP_MIN_WIDTH: ${screenSizes.desktop}px;

    --PAGE_BG: #fbfafc;
    --BLACK: #3f4e63;
    --GRAY_80: #7f8389;
  }
`;
