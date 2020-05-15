import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { Button } from 'react-native'
import MyRecipies from '../../screens/MyRecipies'
import LogInScreen from '../../screens/LogInScreen'
import SignUpScreen from '../../screens/SignUpScreen'
import Profile from '../../screens/Profile'

const Tab = createMaterialBottomTabNavigator()
const Stack = createStackNavigator()

const MainTabNavigator = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="Find Recipes"
				component={MyRecipies}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="ios-home" color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name="Saved Recipies"
				component={MyRecipies}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="ios-home" color={color} size={size} />
					),
				}}
			/>
			{/* <Tab.Screen name="add" component={MyRecipies} />
			<Tab.Screen name="share" component={MyRecipies} /> */}
		</Tab.Navigator>
	)
}

const MainStackNavigator = ({ navigation }) => {
	const isSignedIn = true

	return (
		<NavigationContainer>
			<Stack.Navigator>
				{isSignedIn ? (
					<>
						<Stack.Screen
							name="Home"
							component={MainTabNavigator}
							options={{
								headerLeft: () => (
									<MaterialIcons
										name="person-outline"
										size={24}
										color="black"
										// onPress={() => navigation.navigate(Profile)}
									/>
								),
								headerTitle: 'shake N make',
								headerRight: () => <Button title="Log Out" />,
							}}
						/>
					</>
				) : (
					<>
						<Stack.Screen
							name="Log In"
							component={LogInScreen}
							options={{
								headerTitle: 'shake N make',
							}}
						/>
						<Stack.Screen
							name="Sign Up"
							component={SignUpScreen}
							options={{
								headerTitle: 'shake N make',
								headerBackTitle: 'Log In',
							}}
						/>
					</>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default MainStackNavigator
