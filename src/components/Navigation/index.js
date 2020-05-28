import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { Button, TouchableOpacity } from 'react-native'
import MyRecipies from '../../screens/MyRecipies'
import LogInScreen from '../../screens/LogInScreen'
import SignUpScreen from '../../screens/SignUpScreen'
import Profile from '../../screens/Profile'
import theme from '../../styles'

const Tab = createMaterialBottomTabNavigator()
const Stack = createStackNavigator()

const MainTabNavigator = () => {
	return (
		<Tab.Navigator
			barStyle={{ backgroundColor: theme.background }}
			activeColor={theme.focusText}
			inactiveColor={theme.unfocusedText}
		>
			<Tab.Screen
				name="Find Recipes"
				component={MyRecipies}
				options={{
					tabBarIcon: ({ color }) => (
						<Ionicons name="ios-search" color={color} size={'20'} />
					),
				}}
			/>
			<Tab.Screen
				name="Saved Recipies"
				component={MyRecipies}
				options={{
					tabBarIcon: ({ color }) => (
						<Ionicons name="ios-bookmark" color={color} size={'20'} />
					),
				}}
			/>
		</Tab.Navigator>
	)
}

const MainStackNavigator = () => {
	const isSignedIn = true
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerStyle: {
						backgroundColor: theme.background,
					},
					headerTitle: 'shake N make',
					headerTintColor: theme.focusText,
					headerTitleStyle: {
						fontWeight: 'bold',
					},
				}}
			>
				{isSignedIn ? (
					<>
						<Stack.Screen
							name="Home"
							component={MainTabNavigator}
							options={({ navigation }) => ({
								headerLeft: () => (
									<TouchableOpacity
										onPress={() => navigation.navigate(Profile)}
									>
										<MaterialIcons
											name="person-outline"
											size={24}
											color="black"
										/>
									</TouchableOpacity>
								),
								headerRight: () => (
									<Button title="Log Out" color={theme.focusText} />
								),
							})}
						/>
						<Stack.Screen
							name="Profile"
							component={Profile}
							options={{
								headerBackTitle: 'Back',
							}}
						/>
					</>
				) : (
					<>
						<Stack.Screen name="Log In" component={LogInScreen} />
						<Stack.Screen
							name="Sign Up"
							component={SignUpScreen}
							options={{
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
