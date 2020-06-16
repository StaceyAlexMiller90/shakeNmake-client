import axios from 'axios'
import { apiUrl } from '../../config/constants'
import { selectToken } from '../user/selectors'
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
} from '../appState/actions'

const recipesFetched = (data) => {
  return {
    type: 'FETCH_RECIPES_SUCCESS',
    payload: {
      count: data.count,
      recipes: data.recipes,
    },
  }
}

export const fetchRecipes = (ingredients, offset = 0, limit = 10) => {
  return async (dispatch, getState) => {
    // const token = selectToken(getState())
    dispatch(appLoading())
    try {
      const stringIngredients = ingredients.join('+')
      const response = await axios.post(`${apiUrl}/recipes/find`, {
        stringIngredients,
        offset,
        limit,
      })
      dispatch(
        recipesFetched({
          count: response.data.data.count,
          recipes: response.data.data.recipes,
        })
      )
      dispatch(appDoneLoading())
    } catch (e) {
      console.log(e.message)
    }
  }
}
