"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNative = require("react-native");

const styles = (theme, appearance) => {
  return new _reactNative.StyleSheet.create({
    tnCardContainer: {
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors[appearance].primaryBackground,
      paddingBottom: 15,
      paddingTop: 15,
      paddingLeft: 15,
      paddingRight: 15
    },
    tnCardShadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    }
  });
};

var _default = styles;
exports.default = _default;
//# sourceMappingURL=styles.js.map