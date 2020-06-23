import React from 'react'
import { View, Text } from 'react-native'
import { fonts } from '../../styles'

const BodyText = (props) => {
  return (
    <View>
      <Text style={{ fontFamily: fonts.body }}>{props.text}</Text>
    </View>
  )
}

export default BodyText
