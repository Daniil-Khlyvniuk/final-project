import axios from 'axios'

const getAuthHeader = () => ({
	header: localStorage.getItem('userToken')
})

const toggleFavorites = (productId) => axios.post(
	`/api/favorites/${productId}`, {}, getAuthHeader()
)

const getFavorites = () => axios('/api/favorites/', getAuthHeader())

const getFavoritesIds = () => axios('/api/favorites/ids', getAuthHeader())

export default {
	toggleFavorites,
	getFavorites,
	getFavoritesIds
}