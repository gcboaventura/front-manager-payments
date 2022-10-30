import { combineReducers } from 'redux'
import AddPaypalReducer from './add/reducer'
import DeletePaypalReducer from './delete/reducer'

export default combineReducers({
	add: AddPaypalReducer,
	delete: DeletePaypalReducer
})
