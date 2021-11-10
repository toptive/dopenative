"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNative = require("react-native");

const styles = (theme, appearance) => {
  return new _reactNative.StyleSheet.create({
    tnPrimaryText: {
      color: theme.colors[appearance].primaryText
    },
    tnSecondaryText: {
      color: theme.colors[appearance].secondaryText
    }
  });
};

var _default = styles;
exports.default = _default;
//# sourceMappingURL=styles.js.map