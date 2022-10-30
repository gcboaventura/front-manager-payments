import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './root-reducer'
import { rootSaga } from './root-sagas'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const configureStore = () => {
	const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
	sagaMiddleware.run(rootSaga)

	const getState = store.getState

	return { store, getState }
}

export type RootState = ReturnType<typeof rootReducer>

export const { store, getState } = configureStore()
