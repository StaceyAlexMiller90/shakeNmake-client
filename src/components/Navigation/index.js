import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import MyRecipies from '../../screens/MyRecipies'
import { TabBarIndicator } from 'react-native-tab-view'

const Tab = createMaterialBottomTabNavigator()
const Stack = createStackNavigator()

function getHeaderTitle(route) {
	const routeName = route.state
		? route.state.routes[route.state.index].name
		: route.params?.screen || 'Home'

	switch (routeName) {
		case 'Home':
			return 'Home'
		case 'Find Recipies':
			return 'Find Recipies'
		case 'Saved Recipies':
			return 'Saved Recipies'
	}
}

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

const MainStackNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Find Recipies"
					component={MainTabNavigator}
					options={({ route }) => ({
						headerTitle: getHeaderTitle(route),
					})}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default MainStackNavigator
