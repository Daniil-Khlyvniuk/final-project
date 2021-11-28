import favoritesActions from '.'
import productAPI from '../../utils/API/productAPI'

const fetchFavorites = (productID) => dispatch => {
	dispatch(favoritesActions.setLoading(true))

	Promise.all(productID.map(id => productAPI.getProduct(id)))
		.then(res => {
			dispatch(favoritesActions.setFavorites(res.map(r => r.data)))
			dispatch(favoritesActions.setLoading(false))
		})
}

export default { fetchFavorites }