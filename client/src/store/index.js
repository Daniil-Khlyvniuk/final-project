import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './Products/productsSlice'
import linksSlice from './Links/'
import categorySlice from './Category/categorySlice'
import sliderSlice from './Slider'
import modalSlice from './Modal/modalSlice'
import shoppingBagSlice from './ShoppingBag/shoppingBagSlice'
import productSlice from './Product/productSlice'
import filterSlice from './Filter'
import settingsSlice from './Settings'
import userSlice from './User'
import favoritesSlice from './Favorites/favoritesSlice'
import snackBar from './SnackBar'

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
