function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import DNDefaultTheme from './default';
import { useColorScheme } from 'react-native-appearance';
export default DNDefaultTheme;
export const DNContext = /*#__PURE__*/React.createContext();
const defaultProps = {
  children: null,
  theme: {}
};
export function DNProvider() {
  let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps;
  const {
    theme,
    children
  } = props;
  const colorScheme = useColorScheme();
  const overridenTheme = { ...DNDefaultTheme,
    ...theme
  };
  const context = {
    theme: overridenTheme,
    appearance: colorScheme
  };
  return /*#__PURE__*/React.createElement(DNContext.Provider, {
    value: context
  }, children);
}
export function useTrulyNative(Component, styles) {
  return props => {
    const colorScheme = useColorScheme();
    return /*#__PURE__*/React.createElement(DNContext.Consumer, null, context => /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      theme: { ...DNDefaultTheme,
        ...context.theme
      },
      appearance: colorScheme || context.appearance,
      styles: styles && styles({ ...DNDefaultTheme,
        ...context.theme
      }, context.appearance)
    })));
  };
}
export function extendTheme(theme) {
  return { ...DNDefaultTheme,
    ...theme
  };
}
export function useTheme() {
  return React.useContext(DNContext);
}
//# sourceMappingURL=index.js.map