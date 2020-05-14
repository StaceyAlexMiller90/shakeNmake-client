import * as React from 'react'
import { Text, View, ActivityIndicator, Image } from 'react-native'
import { ThemeProvider, Button } from 'react-native-elements'
import MainStackNavigator from './src/components/Navigation'

const theme = {
	colors: {
		primary: 'green',
	},
	Button: {
		width: '80vw',
	},
}

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<MainStackNavigator />
		</ThemeProvider>
	)
}
