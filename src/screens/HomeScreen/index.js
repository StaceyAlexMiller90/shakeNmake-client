import React from 'react'
import { Text, View, ActivityIndicator, Image } from 'react-native'

const HomeScreen = () => {
	return (
		<>
			<View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
				<Text
					style={{
						fontWeight: 'bold',
						fontSize: 30,
						textAlign: 'center',
					}}
				>
					Welcome to my awesome app!
				</Text>
			</View>
		</>
	)
}

export default HomeScreen
