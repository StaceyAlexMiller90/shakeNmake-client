import React from 'react'
import { Text, View, ActivityIndicator, Image, FlatList } from 'react-native'

const RecipeCard = (props) => {
	console.log('props', props)

	return (
		<View>
			<Image style={{ width: 50, height: 50 }} source={{ uri: props.image }} />
			<Text>{props.title.toUpperCase()}</Text>
			<Text>{props.calories}</Text>
			<Text>{props.source}</Text>
			<FlatList
				data={props.healthLabels}
				renderItem={({ item }) => {
					return <Text>{item}</Text>
				}}
				keyExtractor={(item) => String(item)}
			/>
			<FlatList
				data={props.cautions}
				renderItem={({ item }) => {
					return <Text>{item}</Text>
				}}
				keyExtractor={(item) => String(item)}
			/>
		</View>
	)
}

export default RecipeCard
