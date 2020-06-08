const initialState = {
	count: null,
	recipes: [],
}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_RECIPES_SUCCESS':
			return {
				...state,
				count: action.payload.count,
				recipes: action.payload.recipes,
			}

		default:
			return state
	}
}
