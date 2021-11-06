import {configureStore} from '@reduxjs/toolkit'
import productsSlice from './Products/productsSlice'
import linksSlice from './Links/linksSlice'

const store = configureStore({
	reducer: {
		products: productsSlice,
		links: linksSlice,
	}
})

export default store
