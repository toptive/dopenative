import React, { memo } from 'react'
import { Text } from 'react-native'
import { useSpacing } from '../../hooks/useSpacing'
import { useTrulyNative } from '../../theming'
import dynamicStyles from './styles'

const TNText = props => {
  const {
    style,
    children,
    secondary,
    h1,
    h2,
    h3,
    uppercase,
    lowercase,
    styles,
    theme,
    appearance,
  } = props

  const spacingStyles = useSpacing(props)

  const textStyles = [
    secondary ? styles.tnSecondaryText : styles.tnPrimaryText,
    h1 && { fontSize: theme.fontSizes.xxl, fontWeight: theme.fontWeights.l },
    h2 && { fontSize: theme.fontSizes.xl, fontWeight: theme.fontWeights.l },
    h3 && { fontSize: theme.fontSizes.l, fontWeight: theme.fontWeights.l },
    uppercase && { textTransform: 'uppercase' },
    lowercase && { textTransform: 'lowercase' },
    ...spacingStyles,
    style,
  ]

  return <Text style={textStyles}>{children}</Text>
}

export default memo(useTrulyNative(TNText, dynamicStyles))
