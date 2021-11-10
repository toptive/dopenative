import React, { memo } from 'react'
import { TextInput } from 'react-native'
import { useSpacing } from '../../hooks/useSpacing'
import { useTrulyNative } from '../../theming'
import { TNView } from '../TNView'
import dynamicStyles from './styles'

const TNTextInput = props => {
  const {
    style,
    capitalized,
    value,
    onChange,
    keyboardType,
    placeholder,
    password,
    styles,
  } = props

  const spacingStyles = useSpacing(props)

  const textStyles = [styles.textInput, ...spacingStyles, style]

  console.log(textStyles)

  if (password) {
    return (
      <TextInput
        style={textStyles}
        placeholder={placeholder}
        keyboardType={keyboardType}
        placeholderTextColor="#aaaaaa"
        onChangeText={onChange}
        value={value}
        underlineColorAndroid="transparent"
        autoCapitalize={capitalized ? 'words' : 'none'}
        secureTextEntry
      />
    )
  }

  return (
    <TextInput
      style={textStyles}
      placeholder={placeholder}
      keyboardType={keyboardType}
      placeholderTextColor="#aaaaaa"
      onChangeText={onChange}
      value={value}
      underlineColorAndroid="transparent"
      autoCapitalize={capitalized ? 'words' : 'none'}
    />
  )
}

export default memo(useTrulyNative(TNTextInput, dynamicStyles))
