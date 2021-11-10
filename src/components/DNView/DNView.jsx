import React from 'react'
import { View } from 'react-native'
import { useSpacing } from '../../hooks/useSpacing'
import { useTrulyNative } from '../../theming'
import dynamicStyles from './styles'

const DNView = props => {
  const { children, style } = props

  const spacingStyles = useSpacing(props)

  const viewStyles = [...spacingStyles, style]

  return <View style={viewStyles}>{children}</View>
}

export default React.memo(useTrulyNative(DNView, dynamicStyles))
