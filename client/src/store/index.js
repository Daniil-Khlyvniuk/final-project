import {configureStore} from '@reduxjs/toolkit'
import productsSlice from './Products/productsSlice'

const store = configureStore({
	reducer: {
		products: productsSlice,
	}
})

export default store
