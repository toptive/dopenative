import React, { forwardRef, useEffect, useImperativeHandle } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { useSpacing } from '../../hooks/useSpacing';
import { useTrulyNative } from '../../theming';
import dynamicStyles from './styles';
import DNButton from '../DNButton';
import { DNText } from '../DNText';

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
  const spacingStyles = useSpacing(props);
  const containerStyles = [styles.tnDialogContainer, styles.tnDialogShadow, ...spacingStyles, containerStyle];
  const titleStyles = [styles.tnDialogTitle, titleStyle];
  const messageStyles = [styles.tnDialogMessage, messageStyle];
  return /*#__PURE__*/React.createElement(TouchableHighlight, {
    style: containerStyles
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.tnDialogInnerContainer
  }, /*#__PURE__*/React.createElement(DNText, {
    style: titleStyles,
    mb8: true
  }, title), /*#__PURE__*/React.createElement(DNText, {
    style: messageStyles,
    mb8: true
  }, message), /*#__PURE__*/React.createElement(View, {
    style: styles.tnActionsContainer
  }, actions.map((action, index) => {
    if (action.secondary) {
      return /*#__PURE__*/React.createElement(DNButton, {
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
      return /*#__PURE__*/React.createElement(DNButton, {
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

    return /*#__PURE__*/React.createElement(DNButton, {
      text: action.title,
      onPress: action.onPress,
      ml2: true,
      mr2: true,
      fx1: true,
      key: index
    });
  }))));
};

const DNDialog = Component => /*#__PURE__*/forwardRef((props, myRef) => {
  const [isVisible, setIsVisible] = React.useState(false);
  useImperativeHandle(myRef, () => ({
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

  return /*#__PURE__*/React.createElement(Component, props);
});

export default DNDialog(useTrulyNative(DNDialogContent, dynamicStyles));
//# sourceMappingURL=index.js.map