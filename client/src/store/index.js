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
		modal: modalSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				// Ignore these action types
				ignoredActions: ['modal/handleOpen'],
			},
		}),
})

export default store
