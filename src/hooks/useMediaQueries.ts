import { useMediaQuery } from 'react-responsive';
import { media } from '~/css/mediaQueries';

function useIsMobile() {
  return !useMediaQuery({ query: media.fromDesktop });
}

function useIsDesktop() {
  return useMediaQuery({ query: media.fromDesktop });
}

export { useIsMobile, useIsDesktop };
