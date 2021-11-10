import React, { memo } from 'react';
import { TextInput } from 'react-native';
import { useSpacing } from '../../hooks/useSpacing';
import { useTrulyNative } from '../../theming';
import dynamicStyles from './styles';

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
  const spacingStyles = useSpacing(props);
  const textStyles = [styles.textInput, ...spacingStyles, style];
  console.log(textStyles);

  if (password) {
    return /*#__PURE__*/React.createElement(TextInput, {
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

  return /*#__PURE__*/React.createElement(TextInput, {
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

export default /*#__PURE__*/memo(useTrulyNative(DNTextInput, dynamicStyles));
//# sourceMappingURL=DNTextInput.js.map