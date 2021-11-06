import { createSlice } from '@reduxjs/toolkit'
import categoryOperations from './operations'
const { fetchCategories } = categoryOperations

const categorySlice = createSlice({
	name: 'category',
	initialState: {
		categoryTree: [],
		category: [],
		error: null,
		isLoading: true,
	},
	reducers: {
		setCategory(state, action) {
			state.category = action.payload
		},
		setCategoryTree(state, action) {
			state.categoryTree = action.payload
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchCategories.fulfilled, (state, action) => {
			state.categoryTree = action.payload
			state.isLoading = false
			state.error = null
		})
		builder.addCase(fetchCategories.pending, (state) => {
			state.isLoading = true
			state.error = null
		})
		builder.addCase(fetchCategories.rejected, (state) => {
			state.isLoading = true
			state.error = 'Error happened while categories loading'
		})
	},
})

export const { setCategory, setCategoryTree } = categorySlice.actions
export default categorySlice.reducer