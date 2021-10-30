import * as PRODUCTS from '../constants/products'
import axios from 'axios'

export function getAllProducts() {
	return async function (dispatch) {
		return dispatch({
			type: PRODUCTS.GET_ALL,
			data: await axios.get('/products.json')
				.then(products => products.data)
		})
	}
}