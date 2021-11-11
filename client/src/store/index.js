import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './Products/productsSlice'
import linksSlice from './Links/linksSlice'
import categorySlice from './Category/categorySlice'
import modalSlice from './Modal/modalSlice'

const store = configureStore({
	reducer: {
		products: productsSlice,
		links: linksSlice,
		category: categorySlice,
		modal: modalSlice
	}
})

export default store
