import React from 'react'
import { View, Text } from 'react-native'
import { fonts, colors } from '../../styles'

const HeaderText = (props) => {
  return (
    <View>
      <Text
        style={{
          color: colors.focusText,
          fontFamily: fonts.header,
          fontSize: props.size ? props.size : 10,
        }}
      >
        {props.text}
      </Text>
    </View>
  )
}

export default HeaderText
