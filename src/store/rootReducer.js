import { combineReducers } from 'redux'
import appState from './appState/reducer'
import user from './user/reducer'
import recipies from './recipies/reducer'

export default combineReducers({
	appState,
	user,
	recipies,
})
