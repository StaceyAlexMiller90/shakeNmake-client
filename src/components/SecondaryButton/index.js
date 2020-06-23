import React from 'react'
import { Button } from 'react-native-elements'
import { colors, fonts } from '../../styles'

const SecondaryButton = (props) => {
  const callBackFunction = () => {
    props.onPress()
  }

  return (
    <Button
      buttonStyle={{
        backgroundColor: colors.background,
      }}
      titleStyle={{
        fontFamily: fonts.body,
        color: colors.focusText,
        fontSize: props.size || 15,
      }}
      title={props.title}
      raised={true}
      onPress={props.onPress && callBackFunction}
    />
  )
}

export default SecondaryButton
