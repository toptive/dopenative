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

const DNView = props => {
  const {
    children,
    style
  } = props;
  const spacingStyles = (0, _useSpacing.useSpacing)(props);
  const viewStyles = [...spacingStyles, style];
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: viewStyles
  }, children);
};

var _default = /*#__PURE__*/_react.default.memo((0, _theming.useTrulyNative)(DNView, _styles.default));

exports.default = _default;
//# sourceMappingURL=DNView.js.map