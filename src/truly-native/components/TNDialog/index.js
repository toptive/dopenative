import React, { forwardRef, useEffect, useImperativeHandle } from 'react'

import { Text, TouchableHighlight, View } from 'react-native'
import { useSpacing } from '../../hooks/useSpacing'
import { useTrulyNative } from '../../theming'
import dynamicStyles from './styles'
import TNButton from '../TNButton'
import { TNText } from '../TNText'

const TNDialogContent = props => {
  const {
    containerStyle,
    titleStyle,
    messageStyle,
    iconStyle,
    title,
    message,
    icon,
    actions,
    onClose,
    styles,
    theme,
    appearance,
  } = props

  const spacingStyles = useSpacing(props)

  const containerStyles = [
    styles.tnDialogContainer,
    styles.tnDialogShadow,
    ...spacingStyles,
    containerStyle,
  ]

  const titleStyles = [styles.tnDialogTitle, titleStyle]
  const messageStyles = [styles.tnDialogMessage, messageStyle]

  return (
    <TouchableHighlight style={containerStyles}>
      <View style={styles.tnDialogInnerContainer}>
        <TNText style={titleStyles} mb8>
          {title}
        </TNText>
        <TNText style={messageStyles} mb8>
          {message}
        </TNText>
        <View style={styles.tnActionsContainer}>
          {actions.map((action, index) => {
            if (action.secondary) {
              return (
                <TNButton
                  text={action.title}
                  onPress={action.onPress}
                  secondary
                  ml1
                  mr1
                  fx1
                  key={index}
                />
              )
            }
            if (action.destructive) {
              return (
                <TNButton
                  containerStyle={styles.tnDestructiveButton}
                  textStyle={styles.tnDestructiveButtonText}
                  text={action.title}
                  onPress={action.onPress}
                  secondary
                  ml2
                  mr2
                  fx1
                  key={index}
                />
              )
            }
            return (
              <TNButton
                text={action.title}
                onPress={action.onPress}
                ml2
                mr2
                fx1
                key={index}
              />
            )
          })}
        </View>
      </View>
    </TouchableHighlight>
  )
}

const TNDialog = Component =>
  forwardRef((props, myRef) => {
    const [isVisible, setIsVisible] = React.useState(false)

    useImperativeHandle(myRef, () => ({
      show: () => {
        setIsVisible(true)
      },
      hide: () => {
        setIsVisible(false)
      },
    }))

    if (!isVisible) {
      return null
    }
    return <Component {...props} />
  })
// export default useTrulyNative(TNToast, dynamicStyles)
export default TNDialog(useTrulyNative(TNDialogContent, dynamicStyles))
