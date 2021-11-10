import React from 'react';
import { View } from 'react-native';
import { useSpacing } from '../../hooks/useSpacing';
import { useTrulyNative } from '../../theming';
import dynamicStyles from './styles';

const DNView = props => {
  const {
    children,
    style
  } = props;
  const spacingStyles = useSpacing(props);
  const viewStyles = [...spacingStyles, style];
  return /*#__PURE__*/React.createElement(View, {
    style: viewStyles
  }, children);
};

export default /*#__PURE__*/React.memo(useTrulyNative(DNView, dynamicStyles));
//# sourceMappingURL=DNView.js.map