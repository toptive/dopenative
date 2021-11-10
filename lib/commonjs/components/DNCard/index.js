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

const DNCard = props => {
  const {
    containerStyle,
    radius,
    onPress,
    styles,
    theme,
    appearance,
    children
  } = props;
  const spacingStyles = (0, _useSpacing.useSpacing)(props);
  const containerStyles = [styles.tnCardContainer, radius && {
    borderRadius: radius
  }, styles.tnCardShadow, ...spacingStyles, containerStyle];
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableHighlight, {
    style: containerStyles,
    onPress: onPress
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, null, children));
};

var _default = (0, _theming.useTrulyNative)(DNCard, _styles.default);

exports.default = _default;
//# sourceMappingURL=index.js.map