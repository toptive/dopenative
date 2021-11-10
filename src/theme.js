import { Platform } from 'react-native'

const HORIZONTAL_SPACING_BASE = Platform.OS === 'web' ? 4 : 2
const VERTICAL_SPACING_BASE = 4

const InstamobileTheme = {
  colors: {
    light: {
      primaryBackground: '#ffffff',
      secondaryBackground: '#ffffff',
      primaryForeground: '#8120d6',
      secondaryForeground: '#8442bd',
      foregroundContrast: 'white',
      primaryText: '#000000',
      secondaryText: '#7e7e7e',
      grey0: '#eaeaea',
      grey3: '#e6e6f2',
      grey6: '#d6d6d6',
      grey9: '#939393',
      red: '#ea0606',
    },
    dark: {
      primaryBackground: '#000000',
      secondaryBackground: '#000000',
      primaryForeground: '#8120d6',
      secondaryForeground: '#8442bd',
      foregroundContrast: 'white',
      primaryText: 'white',
      secondaryText: '#7e7e7e',
      grey0: '#232323',
      grey3: '#d6d6d6',
      grey6: '#e6e6f2',
      grey9: '#eaeaea',
      red: '#ea0606',
    },
  },
  spaces: {
    horizontal: {
      s: 2 * HORIZONTAL_SPACING_BASE,
      m: 4 * HORIZONTAL_SPACING_BASE,
      l: 6 * HORIZONTAL_SPACING_BASE,
      xl: 8 * HORIZONTAL_SPACING_BASE,
    },
    vertical: {
      s: 2 * VERTICAL_SPACING_BASE,
      m: 4 * VERTICAL_SPACING_BASE,
      l: 6 * VERTICAL_SPACING_BASE,
      xl: 8 * VERTICAL_SPACING_BASE,
    },
  },
  fontSizes: {
    xxs: 8,
    xs: 12,
    s: 14,
    m: 16,
    l: 18,
    xl: 24,
    xxl: 32,
  },
  fontWeights: {
    s: '400',
    m: '600',
    l: '800',
  },
  icons: {},
  // color, font size, space / margin / padding, vstack / hstack
  button: {
    borderRadius: 8,
  },
}

export default InstamobileTheme
