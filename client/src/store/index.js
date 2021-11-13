import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './Products/productsSlice'
import linksSlice from './Links/linksSlice'
import categorySlice from './Category/categorySlice'
import shoppingBagSlice from './ShoppingBag/shoppingBagSlice'

const store = configureStore({
	reducer: {
		products: productsSlice,
		links: linksSlice,
		category: categorySlice,
		shoppingBag: shoppingBagSlice,
	}
})

export default store
