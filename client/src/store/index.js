import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './Products/productsSlice'
import linksSlice from './Links/linksSlice'
import categorySlice from './Category/categorySlice'
import modalSlice from './Modal/modalSlice'
import shoppingBagSlice from './ShoppingBag/shoppingBagSlice'
import userSlice from './User'

const store = configureStore({
	reducer: {
		products: productsSlice,
		links: linksSlice,
		category: categorySlice,
		modal: modalSlice,
		shoppingBag: shoppingBagSlice,
		user: userSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				// Ignore these action types
				ignoredActions: ['modal/modalToggle', 'user/setToken', 'user/fetchUser/pending','user/fetchUser/fulfilled'],
			},
		}),
})

export default store
