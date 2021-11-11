import React from 'react'
import { Image } from 'react-native'
import { useTrulyNative } from '../../theming'
import { DNView } from '../DNView'
import dynamicStyles from './styles'

const DNImage = props => {
  const { children, style, rounded, source } = props
  const viewStyles = [style, rounded ? { borderRadius: 100000 } : null]

  return (
    <DNView {...props}>
      <Image source={source} style={viewStyles}>
        {children}
      </Image>
    </DNView>
  )
}

export default React.memo(useTrulyNative(DNImage, dynamicStyles))
