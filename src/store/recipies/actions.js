import axios from 'axios'
import {
	appLoading,
	appDoneLoading,
	showMessageWithTimeout,
} from '../appState/actions'

export const fetchRecipies = () => {
	return async (dispatch, getState) => {
		// const token = selectToken(getState())
		dispatch(appLoading())
		try {
			console.log('action!')
			// const response = await axios.get(`${apiUrl}/records`, {
			//   headers: {
			//     Authorization: `Bearer ${token}`,
			//   },
			// })
			// dispatch(
			//   userRecordsFetched({
			//     count: response.data.count,
			//     records: response.data.records,
			//   })
			// )
			dispatch(appDoneLoading())
		} catch (e) {
			console.log(e.message)
		}
	}
}
