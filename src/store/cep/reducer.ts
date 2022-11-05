import { GetCepState } from './state'
import { GetCepActionUnion, GetCepActionKeys } from './action'

const initialState: GetCepState = {
	data: {
		bairro: '',
		cep: '',
		complemento: '',
		ddd: '',
		gia: '',
		ibge: '',
		localidade: '',
		logradouro: '',
		siafi: '',
		uf: ''
	},
	isLoading: false
}

const GetCepReducer = (state = initialState, action: GetCepActionUnion): GetCepState => {
	switch (action.type) {
		case GetCepActionKeys.FETCH_GET_CEP_START:
			return {
				...state,
				isLoading: true
			}
		case GetCepActionKeys.FETCH_GET_CEP_SUCCESS:
			return {
				...state,
				data: action.payload,
				isLoading: false
			}
		case GetCepActionKeys.FETCH_GET_CEP_FALIED:
			return {
				...state,
				error: action.payload,
				isLoading: false
			}
		default:
			return state
	}
}

export default GetCepReducer
