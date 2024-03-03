import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Typography } from './Typography';

type BadgeColor = 'blue' | 'red' | 'default';

const Badge = styled(Typography)<{ color?: BadgeColor }>`
  padding: var(--r4) var(--r8);
  border-radius: 11px;
  white-space: nowrap;

  ${({ color = 'default' }) => {
    switch (color) {
      case 'blue':
        return css`
          background-color: var(--BLUE_10);
          color: var(--BLUE_100);
        `;
      case 'red':
        return css`
          background-color: var(--RED_60);
          color: var(--RED_100);
        `;
      default:
        return css`
          background-color: var(--BLACK_04);
          color: var(--BLACK_70);
        `;
    }
  }}
`;

export { Badge, type BadgeColor };
