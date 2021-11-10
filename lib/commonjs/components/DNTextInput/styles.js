"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNative = require("react-native");

const styles = (theme, appearance) => {
  return new _reactNative.StyleSheet.create({
    textInput: {
      color: theme.colors[appearance].primaryText,
      backgroundColor: theme.colors[appearance].primaryBackground,
      height: 42,
      borderColor: theme.colors[appearance].grey3,
      borderWidth: 1,
      paddingLeft: 20,
      width: '100%',
      textAlign: _reactNative.I18nManager.isRTL ? 'right' : 'left',
      alignSelf: 'center',
      alignItems: 'center'
    }
  });
};

var _default = styles;
exports.default = _default;
//# sourceMappingURL=styles.js.map