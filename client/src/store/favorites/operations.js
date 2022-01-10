import favoritesActions from '.'
import favoritesAPI from '../../utils/API/favoritesAPI'

const fetchFavoritesIds = () => dispatch => {
	dispatch(favoritesActions.setLoading(true))

	favoritesAPI.getFavoritesIds()
		.then(res => {
			if (res.data) {
				dispatch(favoritesActions.setFavoritesIds(res.data.products))
			}
			dispatch(favoritesActions.setLoading(false))
		}
		)
}

const fetchFavorites = () => dispatch => {
	dispatch(favoritesActions.setLoading(true))

	favoritesAPI.getFavorites()
		.then(res => {
			if (res.data) {
				dispatch(favoritesActions.setFavorites(res.data.products))
			}
			dispatch(favoritesActions.setLoading(false))
		}
		)
}

export default {
	fetchFavoritesIds,
	fetchFavorites
}