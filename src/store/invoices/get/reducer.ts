import { GetAllInvoicesState } from './state'
import { GetAllInvoicesActionUnion, GetAllInvoicesActionKeys } from './action'

const initialState: GetAllInvoicesState = {
	data: {
		body: {}
	},
	isLoading: false
}

const GetAllInvoicesReducer = (
	state = initialState,
	action: GetAllInvoicesActionUnion
): GetAllInvoicesState => {
	switch (action.type) {
		case GetAllInvoicesActionKeys.FETCH_GET_ALL_INVOICES_START:
			return {
				...state,
				isLoading: true
			}
		case GetAllInvoicesActionKeys.FETCH_GET_ALL_INVOICES_SUCCESS:
			return {
				...state,
				data: action.payload,
				isLoading: false
			}
		case GetAllInvoicesActionKeys.FETCH_GET_ALL_INVOICES_FALIED:
			return {
				...state,
				error: action.payload,
				isLoading: false
			}
		default:
			return state
	}
}

export default GetAllInvoicesReducer
