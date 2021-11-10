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

const DNToastContent = props => {
  const {
    containerStyle,
    textStyle,
    actionStyle,
    text,
    action,
    onAction,
    radius,
    onPress,
    styles,
    theme,
    appearance
  } = props;
  const spacingStyles = (0, _useSpacing.useSpacing)(props);
  const containerStyles = [styles.tnToastContainer, radius && {
    borderRadius: radius
  }, styles.tnToastShadow, ...spacingStyles, containerStyle];
  const textStyles = [styles.tnToastContent, textStyle];
  const actionStyles = [styles.tnToastPrimaryAction, actionStyle];
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableHighlight, {
    style: containerStyles,
    onPress: onPress
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.tnToastInnerContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: textStyles
  }, text), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: actionStyles,
    onPress: onAction
  }, action)));
};

const DNToast = Component => /*#__PURE__*/(0, _react.forwardRef)((props, myRef) => {
  const [isVisible, setIsVisible] = _react.default.useState(false);

  (0, _react.useImperativeHandle)(myRef, () => ({
    show: () => {
      setIsVisible(true);
    },
    hide: () => {
      setIsVisible(false);
    }
  }));
  (0, _react.useEffect)(() => {
    if (isVisible) {
      setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    }
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement(Component, props);
}); // export default useTrulyNative(TNToast, dynamicStyles)


var _default = DNToast((0, _theming.useTrulyNative)(DNToastContent, _styles.default));

exports.default = _default;
//# sourceMappingURL=index.js.map