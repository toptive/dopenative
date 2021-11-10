"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _useSpacing = require("../../hooks/useSpacing");

var _theming = require("../../theming");

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const DNTextInput = props => {
  const {
    style,
    capitalized,
    value,
    onChange,
    keyboardType,
    placeholder,
    password,
    styles
  } = props;
  const spacingStyles = (0, _useSpacing.useSpacing)(props);
  const textStyles = [styles.textInput, ...spacingStyles, style];
  console.log(textStyles);

  if (password) {
    return /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, {
      style: textStyles,
      placeholder: placeholder,
      keyboardType: keyboardType,
      placeholderTextColor: "#aaaaaa",
      onChangeText: onChange,
      value: value,
      underlineColorAndroid: "transparent",
      autoCapitalize: capitalized ? 'words' : 'none',
      secureTextEntry: true
    });
  }

  return /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, {
    style: textStyles,
    placeholder: placeholder,
    keyboardType: keyboardType,
    placeholderTextColor: "#aaaaaa",
    onChangeText: onChange,
    value: value,
    underlineColorAndroid: "transparent",
    autoCapitalize: capitalized ? 'words' : 'none'
  });
};

var _default = /*#__PURE__*/(0, _react.memo)((0, _theming.useTrulyNative)(DNTextInput, _styles.default));

exports.default = _default;
//# sourceMappingURL=DNTextInput.js.map