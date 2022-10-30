import { combineReducers } from 'redux'
import AddPaypalReducer from './add/reducer'
import DeletePaypalReducer from './delete/reducer'
import UpdatePaypalReducer from './update/reducer'

export default combineReducers({
	add: AddPaypalReducer,
	delete: DeletePaypalReducer,
	update: UpdatePaypalReducer
})
