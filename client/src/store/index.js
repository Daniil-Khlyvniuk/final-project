import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './products/productsSlice'
import linksSlice from './links/'
import categorySlice from './category/categorySlice'
import sliderSlice from './slider'
import modalSlice from './modal/modalSlice'
import shoppingBagSlice from './shoppingBag/shoppingBagSlice'
import productSlice from './product/productSlice'
import filterSlice from './filter'
import settingsSlice from './settings'
import userSlice from './user'
import favoritesSlice from './favorites/favoritesSlice'
import snackBar from './snackBar'


const store = configureStore({
	reducer: {
		slides: sliderSlice,
		products: productsSlice,
		links: linksSlice,
		category: categorySlice,
		modal: modalSlice,
		shoppingBag: shoppingBagSlice,
		user: userSlice,
		product: productSlice,
		filter: filterSlice,
		settings: settingsSlice,
		favorites: favoritesSlice,
		snackBar,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				// Ignore these action types
				ignoredActions: [
					'modal/modalToggle',
					'user/setToken',
					'user/fetchUser/pending',
					'user/fetchUser/fulfilled',
					'filter/setFiltersFromQueryString',
					'products/fetchProductsByFilter/fulfilled',
					'settings/fetchSettings/pending',
					'settings/fetchSettings/fulfilled',
					'favorites/setLoading',
					'favorites/setFavorites',
					'snackBar/snackToggle',
					'user/fetchUserOrders/fulfilled',
					'user/fetchUserOrders/pending'
				],
			},
		}),
})

export default store
