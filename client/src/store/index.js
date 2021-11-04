import { configureStore } from '@reduxjs/toolkit'
import cardReducer from './Card/cardSlice'

const store = configureStore({
	reducer: {
		card: cardReducer,
		// the key here is the name of a section in the store (card in this case)
		// the value (cardReducer in this case) is the corresponding reducer from the slice file (cardSlice in this case)

		// all the reducers are supposed to be here
		// user: userReducer etc.
	}
})

export default store