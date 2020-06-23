import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { Button, TouchableOpacity } from 'react-native'
import FindRecipes from '../../screens/FindRecipes'
import SavedRecipes from '../../screens/SavedRecipes'
import LogInScreen from '../../screens/LogInScreen'
import SignUpScreen from '../../screens/SignUpScreen'
import Profile from '../../screens/Profile'
import RecipesFound from '../../screens/RecipesFound'
import { colors, fonts } from '../../styles'
import SecondaryButton from '../../components/SecondaryButton'

const Tab = createMaterialBottomTabNavigator()
const Stack = createStackNavigator()

const signOut = () => {
  console.log('Sign Out')
}

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: colors.background,
      }}
      activeColor={colors.focusText}
      inactiveColor={colors.unfocusedText}
    >
      <Tab.Screen
        name="Find Recipes"
        component={FindRecipes}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-search" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Saved Recipes"
        component={SavedRecipes}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-bookmark" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const MainStackNavigator = (props) => {
  const isSignedIn = true
  return (
    <NavigationContainer theme={props.theme}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTitle: "Shake 'n Make",
          headerTintColor: colors.focusText,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: fonts.header,
            fontSize: 25,
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
                      color={colors.focusText}
                    />
                  </TouchableOpacity>
                ),
                headerRight: () => (
                  <SecondaryButton title={'Log Out'} onPress={signOut} />
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
            <Stack.Screen
              name="Recipes Found"
              component={RecipesFound}
              options={{
                headerBackTitle: 'Search again',
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
