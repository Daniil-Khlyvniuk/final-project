import axios from 'axios'
import { setAllProducts } from './productsSlice'

const fetchProducts = () => async (dispatch) => {
	const data = await axios
		.get('/products.json')
		.then(products => products?.data)
	if (!data) return
	dispatch(setAllProducts(data))
}

export default {
	fetchProducts,
}