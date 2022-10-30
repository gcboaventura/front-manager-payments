import { AddCreditCardState } from './state'
import { AddCreditCardActionUnion, AddCreditCardActionKeys } from './action'

const initialState: AddCreditCardState = {
	data: {
		body: {}
	},
	isLoading: false
}

const AddCreditCardReducer = (
	state = initialState,
	action: AddCreditCardActionUnion
): AddCreditCardState => {
	switch (action.type) {
		case AddCreditCardActionKeys.FETCH_ADD_CREDIT_CARD_START:
			return {
				...state,
				isLoading: true
			}
		case AddCreditCardActionKeys.FETCH_ADD_CREDIT_CARD_SUCCESS:
			return {
				...state,
				data: action.payload,
				isLoading: false
			}
		case AddCreditCardActionKeys.FETCH_ADD_CREDIT_CARD_FALIED:
			return {
				...state,
				error: action.payload,
				isLoading: false
			}
		default:
			return state
	}
}

export default AddCreditCardReducer
