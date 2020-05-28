// import { DEFAULT_MESSAGE_TIMEOUT } from '../../config/constants'

export const appLoading = () => ({ type: 'APP_LOADING' })
export const appDoneLoading = () => ({ type: 'APP_DONE_LOADING' })
export const clearMessage = () => ({ type: 'CLEAR_MESSAGE' })

export const setMessage = (variant, text) => {
	return {
		type: 'SET_MESSAGE',
		payload: {
			variant,
			text,
		},
	}
}

export const showMessageWithTimeout = (variant, text, timeOutMilliSeconds) => {
	return (dispatch) => {
		dispatch(setMessage(variant, text))

		const timeout = timeOutMilliSeconds || DEFAULT_MESSAGE_TIMEOUT

		setTimeout(() => dispatch(clearMessage()), timeout)
	}
}
