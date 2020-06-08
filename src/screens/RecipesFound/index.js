import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	Text,
	View,
	ActivityIndicator,
	Image,
	FlatList,
	SafeAreaView,
} from 'react-native'
import { selectRecipes, selectNOfRecipes } from '../../store/recipes/selectors'
import { selectAppLoading } from '../../store/appState/selectors'
import RecipeCard from '../../components/RecipeCard'

const RecipesFound = () => {
	const recipes = useSelector(selectRecipes)
	const nOfRecipes = useSelector(selectNOfRecipes)
	const appLoading = useSelector(selectAppLoading)

	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			{appLoading ? (
				<ActivityIndicator />
			) : (
				<SafeAreaView style={{ flex: 1 }}>
					<FlatList
						data={recipes}
						renderItem={({ item }) => {
							return (
								<RecipeCard
									image={item.recipe.image}
									title={item.recipe.label}
									source={item.recipe.uri}
									healthlabels={item.recipe.healthlabels}
									ingredients={item.recipe.ingredientLines}
									cautions={item.recipe.cautions}
									calories={item.recipe.calories}
								/>
							)
						}}
						keyExtractor={(item) => String(item.recipe.uri)}
					/>
				</SafeAreaView>
			)}
		</View>
	)
}

export default RecipesFound
