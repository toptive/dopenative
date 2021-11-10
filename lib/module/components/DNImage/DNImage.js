import React from 'react';
import { Image } from 'react-native';
import { useTrulyNative } from '../../theming';
import { DNView } from '../DNView';
import dynamicStyles from './styles';

const DNImage = props => {
  const {
    children,
    style,
    rounded,
    source
  } = props;
  const viewStyles = [style, rounded ? {
    borderRadius: 100000
  } : null];
  return /*#__PURE__*/React.createElement(DNView, props, /*#__PURE__*/React.createElement(Image, {
    source: source,
    style: viewStyles
  }, children));
};

export default /*#__PURE__*/React.memo(useTrulyNative(DNImage, dynamicStyles));
//# sourceMappingURL=DNImage.js.map