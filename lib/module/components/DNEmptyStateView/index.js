import React from 'react';
import { View } from 'react-native';
import { useTrulyNative } from '../../theming';
import DNButton from '../DNButton';
import { DNText } from '../DNText';
import { DNView } from '../DNView';
import dynamicStyles from './styles';

const DNEmptyStateView = props => {
  const {
    title,
    description,
    callToAction,
    onPress,
    imageView,
    styles,
    containerStyle
  } = props;
  const cStyle = containerStyle ? { ...containerStyle,
    ...styles.container
  } : styles.container;
  return /*#__PURE__*/React.createElement(View, {
    style: cStyle
  }, imageView && /*#__PURE__*/React.createElement(View, {
    style: styles.imageContainer
  }, imageView), (title === null || title === void 0 ? void 0 : title.length) && /*#__PURE__*/React.createElement(DNText, {
    mt4: true,
    style: styles.title
  }, title), (description === null || description === void 0 ? void 0 : description.length) && /*#__PURE__*/React.createElement(DNText, {
    style: styles.description
  }, description), (callToAction === null || callToAction === void 0 ? void 0 : callToAction.length) && /*#__PURE__*/React.createElement(DNView, {
    style: styles.buttonOuterContainer
  }, /*#__PURE__*/React.createElement(DNButton, {
    text: callToAction,
    containerStyle: styles.buttonContainer,
    textStyle: styles.mainButtonText,
    onPress: onPress,
    mt4: true,
    mb8: true,
    fx1: true,
    ml4: true,
    mr4: true
  })));
};

export default useTrulyNative(DNEmptyStateView, dynamicStyles);
//# sourceMappingURL=index.js.map