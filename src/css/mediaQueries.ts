const screenSizes = {
  desktop: 961,
};

const media = {
  fromDesktop: `screen and (min-width: ${screenSizes.desktop}px)`,

  retina_x2: '(-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 144dpi)',
  retina_x3: '(-webkit-min-device-pixel-ratio: 3), (min-resolution: 288dpi)',
};

export { screenSizes, media };
