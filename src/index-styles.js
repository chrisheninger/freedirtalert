export const colors = {
  primary: '#795548',
  primaryDark: '#5D4037',
  primaryLight: '#D7CCC8',
  secondary: '#607D8B',
  background: '#F7F9FC',
  white: '#fff',
  gray100: '#f1f2f7',
  gray200: '#d1d3dd',
  gray300: '#BDBDBD',
  gray400: '#757575',
  gray500: '#6e717a',
  gray600: '#5a5e69',
  gray700: '#444952',
  gray800: '#212121',
  gray900: '#1f2228',
  gray1000: '#090a0d',
  black: '#000',
};

export const typography = {
  sans:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  mono: '"Source Code Pro", monospace',
  headingColor: colors.gray600,
  bodyColor: colors.gray800,
  anchorColor: colors.primary,
  fontBase: '1rem',
};

export const breakpoints = {
  tabletPortrait: `@media (min-width: 600px)`,
  tabletLandscape: `@media (min-width: 900px)`,
  desktop: `@media (min-width: 1200px)`,
};

export const globalBorderRadius = '2px';
export const globalBoxShadow =
  '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)';
export const globalPadding = {
  padding: '12px',
  [breakpoints.tabletPortrait]: {
    padding: '16px',
  },
  [breakpoints.tabletLandscape]: {
    padding: '20px',
  },
  [breakpoints.desktop]: {
    padding: '24px',
  },
};

export const ellipsis = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

export const themeConfig = {
  colors,
  typography,
  breakpoints,
  globalPadding,
  globalBorderRadius,
  globalBoxShadow,
  ellipsis,
};
