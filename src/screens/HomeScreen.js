import * as React from 'react'
import { Image, Platform, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import {
  TNButton,
  TNCard,
  TNDialog,
  TNToast,
  TNText,
  TNImage,
  TNView,
  TNEmptyStateView,
  TNTextInput,
} from '../truly-native'
import { useTranslations } from '../truly-native/hooks/useTranslations'
import { useTheme } from '../truly-native/theming'

export default function HomeScreen() {
  const onPress = () => {
    toastRef?.current?.show()
  }

  const onPressSecondary = () => {
    dialogRef?.current?.show()
  }

  const onEmptyViewPress = () => {
    setIsEmpty(false)
  }

  const onDialogPrimaryPress = () => {
    alert('onDialogPrimaryPress')
  }

  const onDialogSecondaryPress = () => {
    dialogRef?.current?.hide()
  }

  const onDialogDestructivePress = () => {
    alert('onDialogDestructivePress')
  }

  const onToastAction = () => {
    alert('onToastAction')
  }

  const onTextInputChange = text => {
    console.log(text)
  }

  const [isEmpty, setIsEmpty] = React.useState(true)

  const toastRef = React.useRef()
  const dialogRef = React.useRef()

  const { localized } = useTranslations()

  const { appearance, theme } = useTheme()

  if (isEmpty) {
    return (
      <TNEmptyStateView
        title={localized('No Notifications')}
        description={localized('There are no notifications at the moment')}
        callToAction="Click Me"
        onPress={onEmptyViewPress}
        containerStyle={{}}
        imageView={
          <TNImage
            rounded
            style={{ width: 200, height: 200, resizeMode: 'cover' }}
            source={require('../../assets/photos/walking2.jpg')}
          />
        }
      />
    )
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors[appearance].primaryBackground,
      }}>
      <TNToast
        ref={toastRef}
        text="The post has been saved."
        action="Undo"
        onAction={onToastAction}
      />

      <TNDialog
        ref={dialogRef}
        title={localized('Allow Push Notifications')}
        message={localized(
          'Stay up to date with our latest releases by allowing push notifications. Stay up to date with our latest releases by allowing push notifications.',
        )}
        actions={[
          { title: 'Allow', onPress: onDialogPrimaryPress },
          {
            title: 'Decline',
            secondary: true,
            onPress: onDialogSecondaryPress,
          },
          // {
          //   title: 'Destructive',
          //   destructive: true,
          //   onPress: onDialogDestructivePress,
          // },
        ]}
      />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require('../../assets/images/robot-dev.png')
                : require('../../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
        </View>

        <View style={styles.getStartedContainer}>
          <DevelopmentModeNotice />
          <TNTextInput
            capitalized
            br4
            placeholder="E-mail address"
            onChange={onTextInputChange}
            mt8
            mh4
            mb2
          />
          <TNTextInput
            password
            br4
            placeholder="Password"
            onChange={onTextInputChange}
            mb8
            mh4
            style={{ height: 50 }}
          />
          <TNText>This is some basic text.</TNText>
          <TNText uppercase>This is some uppercase text.</TNText>

          <TNText lowercase secondary>
            This is some secondary description.
          </TNText>

          <TNText h1>{localized('This is some basic h1 title.')}</TNText>
          <TNText h2>This is some basic h2 title.</TNText>
          <TNText h3>This is some basic h3 title.</TNText>

          <TNCard>
            <TNText>This is the most basic card.</TNText>
          </TNCard>
          <View
            style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
            <Text>screens/HomeScreen.js</Text>
          </View>

          <Text style={styles.getStartedText}>
            Change any of the text, save the file, and your app will
            automatically reload.
          </Text>
        </View>

        <TNButton
          text="Primary Button"
          containerStyle={styles.mainButton}
          textStyle={styles.mainButtonText}
          onPress={onPress}
          mt4
          mb8
        />
        <TNButton
          text="Secondary Button"
          secondary
          containerStyle={styles.mainButton}
          textStyle={styles.mainButtonText}
          onPress={onPressSecondary}
          mt6
          mb5
        />
        <TNView mt8 ml4 style={{ backgroundColor: 'red' }}>
          <TNText h3>{localized('Boo boom boom')}</TNText>
        </TNView>
      </ScrollView>

      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>
          This is a tab bar. You can edit it in:
        </Text>

        <View
          style={[styles.codeHighlightContainer, styles.navigationFilename]}>
          <Text style={styles.codeHighlightText}>
            navigation/BottomTabNavigator.js
          </Text>
        </View>
      </View>
    </View>
  )
}

HomeScreen.navigationOptions = {
  header: null,
}

function DevelopmentModeNotice() {
  if (__DEV__) {
    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools.
      </Text>
    )
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },

  /// starting here it's mine
  mainButton: {
    flex: 1,
    width: '90%',
    marginHorizontal: 20,
  },
  mainButtonText: {},
})
