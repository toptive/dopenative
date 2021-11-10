"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DNContext = void 0;
exports.DNProvider = DNProvider;
exports.default = void 0;
exports.extendTheme = extendTheme;
exports.useTheme = useTheme;
exports.useTrulyNative = useTrulyNative;

var _react = _interopRequireDefault(require("react"));

var _default2 = _interopRequireDefault(require("./default"));

var _reactNativeAppearance = require("react-native-appearance");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = _default2.default;
exports.default = _default;

const DNContext = /*#__PURE__*/_react.default.createContext();

exports.DNContext = DNContext;
const defaultProps = {
  children: null,
  theme: {}
};

function DNProvider() {
  let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps;
  const {
    theme,
    children
  } = props;
  const colorScheme = (0, _reactNativeAppearance.useColorScheme)();
  const overridenTheme = { ..._default2.default,
    ...theme
  };
  const context = {
    theme: overridenTheme,
    appearance: colorScheme
  };
  return /*#__PURE__*/_react.default.createElement(DNContext.Provider, {
    value: context
  }, children);
}

function useTrulyNative(Component, styles) {
  return props => {
    const colorScheme = (0, _reactNativeAppearance.useColorScheme)();
    return /*#__PURE__*/_react.default.createElement(DNContext.Consumer, null, context => /*#__PURE__*/_react.default.createElement(Component, _extends({}, props, {
      theme: { ..._default2.default,
        ...context.theme
      },
      appearance: colorScheme || context.appearance,
      styles: styles && styles({ ..._default2.default,
        ...context.theme
      }, context.appearance)
    })));
  };
}

function extendTheme(theme) {
  return { ..._default2.default,
    ...theme
  };
}

function useTheme() {
  return _react.default.useContext(DNContext);
}
//# sourceMappingURL=index.js.map