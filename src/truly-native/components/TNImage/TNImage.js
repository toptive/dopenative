import React from 'react'
import { Image } from 'react-native'
import { useTrulyNative } from '../../theming'
import { TNView } from '../TNView'
import dynamicStyles from './styles'

const TNImage = props => {
  const { children, style, rounded, source } = props
  const viewStyles = [style, rounded ? { borderRadius: 100000 } : null]

  return (
    <TNView {...props}>
      <Image source={source} style={viewStyles}>
        {children}
      </Image>
    </TNView>
  )
}

export default React.memo(useTrulyNative(TNImage, dynamicStyles))
