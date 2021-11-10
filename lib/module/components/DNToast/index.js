import React, { forwardRef, useEffect, useImperativeHandle } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { useSpacing } from '../../hooks/useSpacing';
import { useTrulyNative } from '../../theming';
import dynamicStyles from './styles';

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
  const spacingStyles = useSpacing(props);
  const containerStyles = [styles.tnToastContainer, radius && {
    borderRadius: radius
  }, styles.tnToastShadow, ...spacingStyles, containerStyle];
  const textStyles = [styles.tnToastContent, textStyle];
  const actionStyles = [styles.tnToastPrimaryAction, actionStyle];
  return /*#__PURE__*/React.createElement(TouchableHighlight, {
    style: containerStyles,
    onPress: onPress
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.tnToastInnerContainer
  }, /*#__PURE__*/React.createElement(Text, {
    style: textStyles
  }, text), /*#__PURE__*/React.createElement(Text, {
    style: actionStyles,
    onPress: onAction
  }, action)));
};

const DNToast = Component => /*#__PURE__*/forwardRef((props, myRef) => {
  const [isVisible, setIsVisible] = React.useState(false);
  useImperativeHandle(myRef, () => ({
    show: () => {
      setIsVisible(true);
    },
    hide: () => {
      setIsVisible(false);
    }
  }));
  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    }
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  return /*#__PURE__*/React.createElement(Component, props);
}); // export default useTrulyNative(TNToast, dynamicStyles)


export default DNToast(useTrulyNative(DNToastContent, dynamicStyles));
//# sourceMappingURL=index.js.map