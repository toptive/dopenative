import React from 'react'
import { View } from 'react-native'
import { useTrulyNative } from '../../theming'
import TNButton from '../TNButton'
import { TNText } from '../TNText'
import { TNView } from '../TNView'
import dynamicStyles from './styles'

const TNEmptyStateView = props => {
  const {
    title,
    description,
    callToAction,
    onPress,
    imageView,
    styles,
    containerStyle,
  } = props
  const cStyle = containerStyle
    ? { ...containerStyle, ...styles.container }
    : styles.container

  return (
    <View style={cStyle}>
      {imageView && <View style={styles.imageContainer}>{imageView}</View>}
      {title?.length && (
        <TNText mt4 style={styles.title}>
          {title}
        </TNText>
      )}
      {description?.length && (
        <TNText style={styles.description}>{description}</TNText>
      )}
      {callToAction?.length && (
        <TNView style={styles.buttonOuterContainer}>
          <TNButton
            text={callToAction}
            containerStyle={styles.buttonContainer}
            textStyle={styles.mainButtonText}
            onPress={onPress}
            mt4
            mb8
            fx1
            ml4
            mr4
          />
        </TNView>
      )}
    </View>
  )
}

export default useTrulyNative(TNEmptyStateView, dynamicStyles)
