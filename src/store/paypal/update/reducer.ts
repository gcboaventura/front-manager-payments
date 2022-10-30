import { UpdatePaypalState } from './state'
import { UpdatePaypalActionUnion, UpdatePaypalActionKeys } from './action'

const initialState: UpdatePaypalState = {
	data: {
		body: {}
	},
	isLoading: false
}

const UpdatePaypalReducer = (
	state = initialState,
	action: UpdatePaypalActionUnion
): UpdatePaypalState => {
	switch (action.type) {
		case UpdatePaypalActionKeys.FETCH_UPDATE_PAYPAL_START:
			return {
				...state,
				isLoading: true
			}
		case UpdatePaypalActionKeys.FETCH_UPDATE_PAYPAL_SUCCESS:
			return {
				...state,
				data: action.payload,
				isLoading: false
			}
		case UpdatePaypalActionKeys.FETCH_UPDATE_PAYPAL_FALIED:
			return {
				...state,
				error: action.payload,
				isLoading: false
			}
		default:
			return state
	}
}

export default UpdatePaypalReducer
