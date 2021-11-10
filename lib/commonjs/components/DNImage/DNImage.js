"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _theming = require("../../theming");

var _DNView = require("../DNView");

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DNImage = props => {
  const {
    children,
    style,
    rounded,
    source
  } = props;
  const viewStyles = [style, rounded ? {
    borderRadius: 100000
  } : null];
  return /*#__PURE__*/_react.default.createElement(_DNView.DNView, props, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: source,
    style: viewStyles
  }, children));
};

var _default = /*#__PURE__*/_react.default.memo((0, _theming.useTrulyNative)(DNImage, _styles.default));

exports.default = _default;
//# sourceMappingURL=DNImage.js.map