import * as React from 'react'
import { Provider } from 'react-redux'
import store from './src/store'
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper'
import { Text, View, ActivityIndicator, Image } from 'react-native'
import MainStackNavigator from './src/components/Navigation'
import { AppLoading } from 'expo'
import {
  useFonts,
  Lora_400Regular,
  Lora_700Bold,
  Lora_700Bold_Italic,
} from '@expo-google-fonts/lora'
import { BreeSerif_400Regular } from '@expo-google-fonts/bree-serif'
import { colors, fonts } from './src/styles'
import ErrorBoundary from 'react-native-error-boundary'

const fontConfig = {
  default: {
    regular: {
      fontWeight: 'normal',
      fontFamily: fonts.header,
    },
    medium: {
      fontWeight: 'normal',
      fontFamily: fonts.body,
    },
  },
}

const theme = {
  ...DefaultTheme,
  dark: false,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.focusText,
    accent: colors.unfocusedText,
    background: colors.background,
  },
  fonts: configureFonts(fontConfig),
}

const CustomFallback = (error) => (
  <View>
    <Text>Oops something happened!</Text>
    <Text>{error.toString()}</Text>
  </View>
)

export default function App() {
  let [fontsLoaded] = useFonts({
    Lora_400Regular,
    Lora_700Bold,
    Lora_700Bold_Italic,
    BreeSerif_400Regular,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <Provider store={store}>
        <ErrorBoundary FallbackComponent={CustomFallback}>
          <PaperProvider theme={theme}>
            <MainStackNavigator theme={theme} />
          </PaperProvider>
        </ErrorBoundary>
      </Provider>
    )
  }
}
