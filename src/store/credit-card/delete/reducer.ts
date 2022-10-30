import { DeleteCreditCardState } from './state'
import { DeleteCreditCardActionUnion, DeleteCreditCardActionKeys } from './action'

const initialState: DeleteCreditCardState = {
	data: {
		body: {}
	},
	isLoading: false
}

const DeleteCreditCardReducer = (
	state = initialState,
	action: DeleteCreditCardActionUnion
): DeleteCreditCardState => {
	switch (action.type) {
		case DeleteCreditCardActionKeys.FETCH_DELETE_CREDIT_CARD_START:
			return {
				...state,
				isLoading: true
			}
		case DeleteCreditCardActionKeys.FETCH_DELETE_CREDIT_CARD_SUCCESS:
			return {
				...state,
				data: action.payload,
				isLoading: false
			}
		case DeleteCreditCardActionKeys.FETCH_DELETE_CREDIT_CARD_FALIED:
			return {
				...state,
				error: action.payload,
				isLoading: false
			}
		default:
			return state
	}
}

export default DeleteCreditCardReducer
