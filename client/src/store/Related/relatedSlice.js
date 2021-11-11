import {createSlice} from '@reduxjs/toolkit'

const initialState = {
	data : [
		{
			id: '1',
			customId: 'promotion-women-clothing',
			imageUrl: 'https://marieclairehome.com.ua/assets/images/products/868/800x/postilna-bilyzna-marie-claire-innsbruck.jpg',
			title: 'OCEAN  COLLECTION',
			description: 'Do not miss our hot offer. Promotion ends 10/30/2019',
			category: '5d99f68e419d040eec0f722c'
		},
		{
			id: '2',
			customId: 'promotion-women-clothing',
			imageUrl: 'https://shuhlyadka.com.ua/image/cache/catalog/Aran%20Clasy/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5%20%D0%B1%D0%B5%D0%BB%D1%8C%D0%B5%20%D1%81%D0%B0%D1%82%D0%B8%D0%BD%20%D0%A2%D1%83%D1%80%D1%86%D0%B8%D1%8F%20%D0%B5%D0%B2%D1%80%D0%BE%20Aran%20Clasy%20Adra%20v1-800x800.jpg',
			description: 'SUBSCRIBE NOW AND GET 15% OFF ON YOUR FIRST ORDER',
			category: '5d99f68e419d040eec0f722c'
		},{
			id: '3',
			customId: 'promotion-women-clothing',
			imageUrl: 'https://images.ua.prom.st/1783929320_postelnoe-bele-satin.jpg',
			description: 'UP TO 30% OFF ON YOUR FAVOURITE FRENCH LINEN',
			category: '5d99f68e419d040eec0f722c'
		},
	],
	isLoading: true,
	error: null,
}

const relatedSlice = createSlice({
	name: 'related',
	initialState, 
	reducer: {
		setRelatedItems(state,action){
			state.data = action.payload
		}
	}
})

export default relatedSlice.reducer