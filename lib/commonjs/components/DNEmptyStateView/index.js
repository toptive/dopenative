"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _theming = require("../../theming");

var _DNButton = _interopRequireDefault(require("../DNButton"));

var _DNText = require("../DNText");

var _DNView = require("../DNView");

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DNEmptyStateView = props => {
  const {
    title,
    description,
    callToAction,
    onPress,
    imageView,
    styles,
    containerStyle
  } = props;
  const cStyle = containerStyle ? { ...containerStyle,
    ...styles.container
  } : styles.container;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: cStyle
  }, imageView && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.imageContainer
  }, imageView), (title === null || title === void 0 ? void 0 : title.length) && /*#__PURE__*/_react.default.createElement(_DNText.DNText, {
    mt4: true,
    style: styles.title
  }, title), (description === null || description === void 0 ? void 0 : description.length) && /*#__PURE__*/_react.default.createElement(_DNText.DNText, {
    style: styles.description
  }, description), (callToAction === null || callToAction === void 0 ? void 0 : callToAction.length) && /*#__PURE__*/_react.default.createElement(_DNView.DNView, {
    style: styles.buttonOuterContainer
  }, /*#__PURE__*/_react.default.createElement(_DNButton.default, {
    text: callToAction,
    containerStyle: styles.buttonContainer,
    textStyle: styles.mainButtonText,
    onPress: onPress,
    mt4: true,
    mb8: true,
    fx1: true,
    ml4: true,
    mr4: true
  })));
};

var _default = (0, _theming.useTrulyNative)(DNEmptyStateView, _styles.default);

exports.default = _default;
//# sourceMappingURL=index.js.map