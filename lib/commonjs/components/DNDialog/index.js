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

var _DNButton = _interopRequireDefault(require("../DNButton"));

var _DNText = require("../DNText");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const DNDialogContent = props => {
  const {
    containerStyle,
    titleStyle,
    messageStyle,
    iconStyle,
    title,
    message,
    icon,
    actions,
    onClose,
    styles,
    theme,
    appearance
  } = props;
  const spacingStyles = (0, _useSpacing.useSpacing)(props);
  const containerStyles = [styles.tnDialogContainer, styles.tnDialogShadow, ...spacingStyles, containerStyle];
  const titleStyles = [styles.tnDialogTitle, titleStyle];
  const messageStyles = [styles.tnDialogMessage, messageStyle];
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableHighlight, {
    style: containerStyles
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.tnDialogInnerContainer
  }, /*#__PURE__*/_react.default.createElement(_DNText.DNText, {
    style: titleStyles,
    mb8: true
  }, title), /*#__PURE__*/_react.default.createElement(_DNText.DNText, {
    style: messageStyles,
    mb8: true
  }, message), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.tnActionsContainer
  }, actions.map((action, index) => {
    if (action.secondary) {
      return /*#__PURE__*/_react.default.createElement(_DNButton.default, {
        text: action.title,
        onPress: action.onPress,
        secondary: true,
        ml1: true,
        mr1: true,
        fx1: true,
        key: index
      });
    }

    if (action.destructive) {
      return /*#__PURE__*/_react.default.createElement(_DNButton.default, {
        containerStyle: styles.tnDestructiveButton,
        textStyle: styles.tnDestructiveButtonText,
        text: action.title,
        onPress: action.onPress,
        secondary: true,
        ml2: true,
        mr2: true,
        fx1: true,
        key: index
      });
    }

    return /*#__PURE__*/_react.default.createElement(_DNButton.default, {
      text: action.title,
      onPress: action.onPress,
      ml2: true,
      mr2: true,
      fx1: true,
      key: index
    });
  }))));
};

const DNDialog = Component => /*#__PURE__*/(0, _react.forwardRef)((props, myRef) => {
  const [isVisible, setIsVisible] = _react.default.useState(false);

  (0, _react.useImperativeHandle)(myRef, () => ({
    show: () => {
      setIsVisible(true);
    },
    hide: () => {
      setIsVisible(false);
    }
  }));

  if (!isVisible) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement(Component, props);
});

var _default = DNDialog((0, _theming.useTrulyNative)(DNDialogContent, _styles.default));

exports.default = _default;
//# sourceMappingURL=index.js.map