import { createAsyncThunk } from '@reduxjs/toolkit'

const addToShoppingBag = createAsyncThunk(
	'shoppingBag/addToShoppingBag',
)

export default {
	addToShoppingBag,
}