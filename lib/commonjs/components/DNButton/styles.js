"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNative = require("react-native");

const styles = (theme, appearance) => {
  return new _reactNative.StyleSheet.create({
    DNButtonContainer: {
      borderRadius: 3,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors[appearance].primaryForeground,
      color: 'white',
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 16,
      paddingBottom: 16
    },
    DNButtonText: {
      color: theme.colors[appearance].foregroundContrast,
      fontSize: theme.fontSizes.m,
      fontWeight: theme.fontWeights.m
    },
    DNButtonShadow: {
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