import React from 'react'
import { View, Button, ActivityIndicator, Image } from 'react-native'
import HeaderText from '../../components/HeaderText'

const LogIn = ({ navigation }) => {
  return (
    <View>
      <HeaderText size={30} text={'Sign In'} />
      <Button title="Sign Up" onPress={() => navigation.navigate('Sign Up')} />
    </View>
  )
}

export default LogIn
