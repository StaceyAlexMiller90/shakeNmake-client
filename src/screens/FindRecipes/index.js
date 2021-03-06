import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Button, ActivityIndicator, Image } from 'react-native'
import { Chip, TextInput } from 'react-native-paper'
import { Accelerometer } from 'expo-sensors'
import { fetchRecipes } from '../../store/recipes/actions'
import HeaderText from '../../components/HeaderText'
import PrimaryButton from '../../components/PrimaryButton'
import SecondaryButton from '../../components/SecondaryButton'

const FindRecipes = ({ navigation }) => {
  const dispatch = useDispatch()
  const [shaking, setShaking] = useState(false)
  const [detectorOn, setDetectorOn] = useState(true)
  const [addedIngredient, setAddedIngredient] = useState('')
  const [ingredientsList, setIngredientsList] = useState([])

  const addItem = () => {
    if (addedIngredient.length) {
      setIngredientsList([...ingredientsList, addedIngredient.trim()])
      setAddedIngredient('')
    }
  }

  const deleteItem = (ingToDelete) => {
    const newList = ingredientsList.filter((ing) => ing !== ingToDelete)
    setIngredientsList(newList)
  }

  useEffect(() => {
    const checkForAccelerometer = async () => {
      const available = await Accelerometer.isAvailableAsync()
      setDetectorOn(available)
    }
    checkForAccelerometer()

    Accelerometer.setUpdateInterval(500)

    const subscription = Accelerometer.addListener((data) => {
      const { x, y, z } = data
      const acceleration = Math.sqrt(x * x + y * y + z * z)
      const sensibility = 1.7

      if (acceleration >= sensibility) {
        setShaking(true)
      } else if (acceleration < sensibility) {
        setShaking(false)
      }
    })

    return () => subscription.remove()
  }, [])

  const findRecipes = () => {
    dispatch(fetchRecipes(ingredientsList))
    navigation.navigate('Recipes Found')
  }

  useEffect(() => {
    if (shaking) {
      findRecipes()
    }
  }, [shaking])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <HeaderText size={20} text={'Add your ingredients'} />
      <TextInput
        style={{ width: '70%' }}
        mode="outlined"
        value={addedIngredient}
        enablesReturnKeyAutomatically={true}
        onChangeText={(text) => setAddedIngredient(text)}
        onSubmitEditing={addItem}
      />
      <PrimaryButton title="Add" onPress={addItem} />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {ingredientsList.map((ing, index) => {
          return (
            <Chip
              key={index}
              mode="outlined"
              icon="close"
              onPress={() => deleteItem(ing)}
            >
              {ing}
            </Chip>
          )
        })}
      </View>
      <HeaderText size={20} text={'And then shake it!'} />
      <SecondaryButton
        size={15}
        title="Find without shake"
        onPress={findRecipes}
      />
    </View>
  )
}

export default FindRecipes
