import { CancelSignatureState } from './state'
import { CancelSignatureActionUnion, CancelSignatureActionKeys } from './action'

const initialState: CancelSignatureState = {
	data: {
		plan_id: '',
		payment_method: 'credit_card',
		start_at: '',
		billing_type: 'prepaid',
		interval: 'month',
		customer: {
			name: '',
			type: 'individual',
			email: '',
			document: '',
			document_type: 'CPF',
			gender: 'male',
			address: {
				country: '',
				state: '',
				city: '',
				zip_code: '',
				line_1: '',
				line_2: ''
			},
			phones: {
				mobile_phone: {
					area_code: '',
					country_code: '',
					number: ''
				}
			},
			birthdate: ''
		},
		card: {
			number: '',
			holder_name: '',
			exp_month: 0,
			exp_year: 0,
			cvv: '',
			billing_address: {
				country: '',
				state: '',
				city: '',
				zip_code: '',
				line_1: '',
				line_2: ''
			}
		},
		id: '',
		current_cycle: {
			id: '',
			start_at: '',
			end_at: '',
			billing_at: ''
		},
		next_billing_at: '',
		currency: 'BRL',
		statement_descriptor: '',
		status: 'active',
		created_at: '',
		updated_at: '',
		plan: {
			name: '',
			description: '',
			payment_methods: [],
			start_at: '',
			installments: [],
			interval: 'day',
			interval_count: 0,
			billing_type: 'exact_day',
			minimum_price: 0,
			items: [],
			cycles: 0,
			created_at: '',
			id: '',
			status: 'active',
			updated_at: '',
			url: ''
		},
		items: {
			quantity: '',
			description: ''
		}
	},
	isLoading: false
}

const CancelSignatureReducer = (
	state = initialState,
	action: CancelSignatureActionUnion
): CancelSignatureState => {
	switch (action.type) {
		case CancelSignatureActionKeys.FETCH_CANCEL_SIGNATURE_START:
			return {
				...state,
				isLoading: true
			}
		case CancelSignatureActionKeys.FETCH_CANCEL_SIGNATURE_SUCCESS:
			return {
				...state,
				data: action.payload,
				isLoading: false
			}
		case CancelSignatureActionKeys.FETCH_CANCEL_SIGNATURE_FALIED:
			return {
				...state,
				error: action.payload,
				isLoading: false
			}
		default:
			return state
	}
}

export default CancelSignatureReducer
