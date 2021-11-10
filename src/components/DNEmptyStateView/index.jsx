import React from 'react'
import { View } from 'react-native'
import { useTrulyNative } from '../../theming'
import DNButton from '../DNButton'
import { DNText } from '../DNText'
import { DNView } from '../DNView'
import dynamicStyles from './styles'

const DNEmptyStateView = props => {
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
        <DNText mt4 style={styles.title}>
          {title}
        </DNText>
      )}
      {description?.length && (
        <DNText style={styles.description}>{description}</DNText>
      )}
      {callToAction?.length && (
        <DNView style={styles.buttonOuterContainer}>
          <DNButton
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
        </DNView>
      )}
    </View>
  )
}

export default useTrulyNative(DNEmptyStateView, dynamicStyles)
