"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNative = require("react-native");

const styles = (theme, appearance) => {
  return _reactNative.StyleSheet.create({
    imageContainer: {
      alignSelf: 'center'
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      alignSelf: 'center',
      color: theme.colors[appearance].mainTextColor,
      marginBottom: 15
    },
    description: {
      alignSelf: 'center',
      color: theme.colors[appearance].mainTextColor,
      textAlign: 'center',
      width: '90%',
      lineHeight: 20
    },
    buttonOuterContainer: {
      flexDirection: 'row'
    },
    buttonContainer: {
      alignSelf: 'center',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30
    },
    buttonName: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: '600'
    }
  });
};

var _default = styles;
exports.default = _default;
//# sourceMappingURL=styles.js.map