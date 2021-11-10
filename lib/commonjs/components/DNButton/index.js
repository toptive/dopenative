"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _useSpacing = require("../../hooks/useSpacing");

var _theming = require("../../theming");

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DNButton = props => {
  const {
    containerStyle,
    textStyle,
    text,
    radius,
    onPress,
    styles,
    secondary,
    shadow,
    theme,
    appearance
  } = props;
  const spacingStyles = (0, _useSpacing.useSpacing)(props);
  const containerStyles = [styles.DNButtonContainer, {
    borderRadius: radius !== null && radius !== void 0 ? radius : theme.button.borderRadius
  }, secondary && {
    backgroundColor: theme.colors[appearance].primaryBackground,
    borderColor: theme.colors[appearance].primaryForeground,
    borderWidth: 1
  }, ...spacingStyles, shadow && styles.DNButtonShadow, containerStyle];
  const textStyles = [styles.DNButtonText, secondary && {
    color: theme.colors[appearance].primaryForeground
  }, textStyle];
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    style: containerStyles,
    onPress: onPress
  }, text && /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: textStyles
  }, text));
};

var _default = (0, _theming.useTrulyNative)(DNButton, _styles.default);

exports.default = _default;
//# sourceMappingURL=index.js.map