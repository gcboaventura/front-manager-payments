import { DeletePaypalState } from './state'
import { DeletePaypalActionUnion, DeletePaypalActionKeys } from './action'

const initialState: DeletePaypalState = {
	data: {
		body: {}
	},
	isLoading: false
}

const DeletePaypalReducer = (
	state = initialState,
	action: DeletePaypalActionUnion
): DeletePaypalState => {
	switch (action.type) {
		case DeletePaypalActionKeys.FETCH_DELETE_PAYPAL_START:
			return {
				...state,
				isLoading: true
			}
		case DeletePaypalActionKeys.FETCH_DELETE_PAYPAL_SUCCESS:
			return {
				...state,
				data: action.payload,
				isLoading: false
			}
		case DeletePaypalActionKeys.FETCH_DELETE_PAYPAL_FALIED:
			return {
				...state,
				error: action.payload,
				isLoading: false
			}
		default:
			return state
	}
}

export default DeletePaypalReducer
