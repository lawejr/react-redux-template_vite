import { css } from '@emotion/react';
import { media } from './mediaQueries';

const clearButton = css`
  background-color: transparent;
  padding: 0;
  border: 0;
  -webkit-appearance: none;
`;

const clearList = css`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const centeredContainer = css`
  padding: 0 var(--r16);

  @media ${media.fromDesktop} {
    padding: 0 max(calc(50% - var(--CONTAINER_WIDTH) / 2), var(--r20));
  }
`;

export { clearButton, clearList, centeredContainer };
