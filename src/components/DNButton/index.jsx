import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { useSpacing } from '../../hooks/useSpacing'
import { useTrulyNative } from '../../theming'
import dynamicStyles from './styles'

const DNButton = props => {
  const {
    containerStyle,
    textStyle,
    text,
    radius,
    onPress,
    styles,
    secondary,
    shadow,
    theme,
    appearance,
  } = props
  const spacingStyles = useSpacing(props)
  const containerStyles = [
    styles.DNButtonContainer,
    { borderRadius: radius ?? theme.button.borderRadius },
    secondary && {
      backgroundColor: theme.colors[appearance].primaryBackground,
      borderColor: theme.colors[appearance].primaryForeground,
      borderWidth: 1,
    },
    ...spacingStyles,
    shadow && styles.DNButtonShadow,
    containerStyle,
  ]

  const textStyles = [
    styles.DNButtonText,
    secondary && { color: theme.colors[appearance].primaryForeground },
    textStyle,
  ]

  return (
    <TouchableOpacity style={containerStyles} onPress={onPress}>
      {text && <Text style={textStyles}>{text}</Text>}
    </TouchableOpacity>
  )
}

export default useTrulyNative(DNButton, dynamicStyles)
