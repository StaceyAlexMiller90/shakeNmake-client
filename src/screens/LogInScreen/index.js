import React from 'react'
import { Text, View, Button, ActivityIndicator, Image } from 'react-native'

const LogIn = ({ navigation }) => {
	return (
		<View>
			<Text>Log In!</Text>
			<Button title="Sign Up" onPress={() => navigation.navigate('Sign Up')} />
		</View>
	)
}

export default LogIn
