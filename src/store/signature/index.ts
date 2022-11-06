import { combineReducers } from 'redux'
import AddSignatureReducer from './add/reducer'
import CancelSignatureReducer from './cancel/reducer'
import GetSignatureReducer from './get/reducer'
import UpdateCreditCardSignatureReducer from './update-credit-card/reducer'

export default combineReducers({
	add: AddSignatureReducer,
	get: GetSignatureReducer,
	cancel: CancelSignatureReducer,
	updateCreditCard: UpdateCreditCardSignatureReducer
})
