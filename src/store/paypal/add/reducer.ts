import { AddPaypalState } from './state'
import { AddPaypalActionUnion, AddPaypalActionKeys } from './action'

const initialState: AddPaypalState = {
	data: {
		body: {}
	},
	isLoading: false
}

const AddPaypalReducer = (state = initialState, action: AddPaypalActionUnion): AddPaypalState => {
	switch (action.type) {
		case AddPaypalActionKeys.FETCH_ADD_PAYPAL_START:
			return {
				...state,
				isLoading: true
			}
		case AddPaypalActionKeys.FETCH_ADD_PAYPAL_SUCCESS:
			return {
				...state,
				data: action.payload,
				isLoading: false
			}
		case AddPaypalActionKeys.FETCH_ADD_PAYPAL_FALIED:
			return {
				...state,
				error: action.payload,
				isLoading: false
			}
		default:
			return state
	}
}

export default AddPaypalReducer
