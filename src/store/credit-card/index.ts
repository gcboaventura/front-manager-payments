import { combineReducers } from 'redux'
import AddCreditCardReducer from './add/reducer'
import DeleteCreditCardReducer from './delete/reducer'
import UpdateCreditCardReducer from './update/reducer'

export default combineReducers({
	add: AddCreditCardReducer,
	delete: DeleteCreditCardReducer,
	update: UpdateCreditCardReducer
})
