import React from 'react'
import { Button } from 'react-native-elements'
import { colors, fonts } from '../../styles'

const PrimaryButton = (props) => {
  const callBackFunction = () => {
    props.onPress()
  }

  return (
    <Button
      buttonStyle={{
        backgroundColor: colors.popColor,
        margin: 10,
      }}
      titleStyle={{
        fontFamily: fonts.header,
        color: colors.focusText,
        fontSize: props.size || 20,
      }}
      title={props.title}
      raised={true}
      onPress={props.onPress && callBackFunction}
    />
  )
}

export default PrimaryButton
