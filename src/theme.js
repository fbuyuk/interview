import { extendTheme } from '@chakra-ui/react';

const fonts = {
  body: `"SF Pro Display",Inter,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  heading: `"SF Pro Display",Inter,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const overrides = {
  fonts,
  config,
};

const customTheme = extendTheme(overrides);

export default customTheme;
