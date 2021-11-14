import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './Products/productsSlice'
import linksSlice from './Links/linksSlice'
import categorySlice from './Category/categorySlice'
import sliderSlice from './Slider'
import modalSlice from './Modal/modalSlice'
import shoppingBagSlice from './ShoppingBag/shoppingBagSlice'
<<<<<<< HEAD
import activeProductSlice from './ActiveProduct/activeProductSlice'
=======
import userSlice from './User'
>>>>>>> develop

const store = configureStore({
	reducer: {
		slides: sliderSlice,
		products: productsSlice,
		links: linksSlice,
		category: categorySlice,
		modal: modalSlice,
		shoppingBag: shoppingBagSlice,
<<<<<<< HEAD
		activeProduct : activeProductSlice,
=======
		user: userSlice,
>>>>>>> develop
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
