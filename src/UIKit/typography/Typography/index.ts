import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { media } from '~/css/mediaQueries';
import { fontSizes, fontWeights, lineHeights } from './const';
import { ITypographyProps, TypographySize } from './types';

const defaultMobileFontSize = 's';
const defaultDesktopFontSize = 'm';

const calcFontProps = (size: TypographySize, rootSZ: TypographySize) => ({
  fontSize: `${fontSizes[size] / fontSizes[rootSZ]}rem`,
  lineHeight: lineHeights[size] / fontSizes[size],
});

const getMobileFontProps = (fontSize: TypographySize) =>
  calcFontProps(fontSize, defaultMobileFontSize);
const getDesktopFontProps = (fontSize: TypographySize) =>
  calcFontProps(fontSize, defaultDesktopFontSize);

/**
 * Sizes:
 * 'xs' = 12
 * 's' = 14
 * 'm' = 16
 * 'l' = 18
 * 'h3' = 20
 * 'h2' = 24
 * 'h1' = 28
 *
 * Default: weight = 'normal', size = 's', dSize = 'm'
 *
 * @param size mobile font-size
 * @param dSize desktop font-size
 * @param weight font-weight: 'normal' | 'medium' | 'bold'
 */
const Typography = styled.p`
  ${({ weight = 'normal', size = 's', dSize = 'm' }: ITypographyProps) => {
    const fontWeigh = fontWeights[weight];
    const { fontSize, lineHeight } = getMobileFontProps(size as TypographySize);
    const { fontSize: desktopFontSize, lineHeight: desktopLineHeight } =
      getDesktopFontProps(dSize as TypographySize);

    return css`
      font-weight: ${fontWeigh};
      font-size: ${fontSize};
      line-height: ${lineHeight};
      letter-spacing: 0.01em;

      @media ${media.fromDesktop} {
        font-size: ${desktopFontSize};
        line-height: ${desktopLineHeight};
      }
    `;
  }}
`;

const AccessibleHiddenText = styled.span`
  clip: rect(0, 0, 0, 0) !important;
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  margin: -1px !important;
  padding: 0 !important;
  overflow: hidden !important;
  border: 0 !important;
  white-space: nowrap !important;
`;

export {
  getMobileFontProps,
  getDesktopFontProps,
  Typography,
  AccessibleHiddenText,
};
