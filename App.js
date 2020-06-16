import * as React from 'react'
import { Provider } from 'react-redux'
import store from './src/store'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { Text, View, ActivityIndicator, Image } from 'react-native'
import MainStackNavigator from './src/components/Navigation'
import colors from './src/styles'
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/dev'

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.focusText,
    accent: colors.background,
  },
}

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <MainStackNavigator />
      </PaperProvider>
    </Provider>
  )
}
