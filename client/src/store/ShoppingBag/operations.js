import { createAsyncThunk } from '@reduxjs/toolkit'

// TODO - API
const addToShoppingBag = createAsyncThunk(
	'shoppingBag/addToShoppingBag',
	// async (value) => { }
)


export default {
	addToShoppingBag,
}