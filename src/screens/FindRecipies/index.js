import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Text, View, Button, ActivityIndicator, Image } from 'react-native'
import { Chip, TextInput } from 'react-native-paper'
import { Accelerometer } from 'expo-sensors'
import { fetchRecipies } from '../../store/recipies/actions'

const FindRecipies = () => {
	const dispatch = useDispatch()
	const [shaking, setShaking] = useState(false)
	const [detectorOn, setDetectorOn] = useState(true)
	const [addedIngredient, setAddedIngredient] = useState('')
	const [ingredientsList, setIngredientsList] = useState([])

	const addItem = () => {
		setIngredientsList([...ingredientsList, addedIngredient.trim()])
		setAddedIngredient('')
	}

	const deleteItem = (ingToDelete) => {
		const newList = ingredientsList.filter((ing) => ing !== ingToDelete)
		setIngredientsList(newList)
	}

	useEffect(() => {
		const available = Accelerometer.isAvailableAsync()
		setDetectorOn(available)

		Accelerometer.setUpdateInterval(60)

		const subscription = Accelerometer.addListener((data) => {
			const { x, y, z } = data
			const acceleration = Math.sqrt(x * x + y * y + z * z)
			const sensibility = 1.8

			if (acceleration >= sensibility) {
				setShaking(true)
			} else if (acceleration < sensibility) {
				setShaking(false)
			}
		})
		return () => subscription.remove()
	}, [])

	useEffect(() => {
		if (shaking) {
			dispatch(fetchRecipies())
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
			<Text>Add your ingredients</Text>
			<TextInput
				style={{ width: '80%' }}
				mode="outlined"
				value={addedIngredient}
				onChangeText={(text) => setAddedIngredient(text)}
			/>
			<Button title="Add" onPress={addItem} />
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
		</View>
	)
}

export default FindRecipies
