import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import rootReducer from './reducers'

const customMiddleware = () => {
	return applyMiddleware(thunk)
}

export const configureStore = () => {
	return createStore(
		rootReducer,
		composeWithDevTools(customMiddleware())
	)
}
