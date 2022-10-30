import { UpdateCreditCardState } from './state'
import { UpdateCreditCardActionUnion, UpdateCreditCardActionKeys } from './action'

const initialState: UpdateCreditCardState = {
	data: {
		body: {}
	},
	isLoading: false
}

const UpdateCreditCardReducer = (
	state = initialState,
	action: UpdateCreditCardActionUnion
): UpdateCreditCardState => {
	switch (action.type) {
		case UpdateCreditCardActionKeys.FETCH_UPDATE_CREDIT_CARD_START:
			return {
				...state,
				isLoading: true
			}
		case UpdateCreditCardActionKeys.FETCH_UPDATE_CREDIT_CARD_SUCCESS:
			return {
				...state,
				data: action.payload,
				isLoading: false
			}
		case UpdateCreditCardActionKeys.FETCH_UPDATE_CREDIT_CARD_FALIED:
			return {
				...state,
				error: action.payload,
				isLoading: false
			}
		default:
			return state
	}
}

export default UpdateCreditCardReducer
