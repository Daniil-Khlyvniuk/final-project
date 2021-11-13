import { createSlice } from '@reduxjs/toolkit'

const activeProductSlice = createSlice({
	name : 'activeProduct',
	initialState : {
		product : null,
		activeSize : null,
		activeColor: null,
		variants: null,
		isAvailable :null
	},
	reducers:{
		setActiveProduct(state,action){
			state.product = {...action.payload , amount : 1}
		},
		clearActiveProduct(state){
			// eslint-disable-next-line no-unused-vars
			state = {}
		},
		setActiveColor(state, action){
			state.activeColor = action.payload
		},
		setActiveSize(state, action){
			state.activeSize = action.payload
		},
		setIsAvailable(state, action){
			if(action.payload === 0){
				state.isAvailable = 'pre-order'
			}else if(action.payload < 5){
				state.isAvailable = 'low on stock!'
			} else {
				state.isAvailable = 'Available'
			}
		},
		setAllVariants(state, action){
			state.variants = action.payload
		}
	}
})

export const {setActiveProduct, setActiveColor , setActiveSize, setIsAvailable , clearActiveProduct ,} = activeProductSlice.actions

export default activeProductSlice.reducer