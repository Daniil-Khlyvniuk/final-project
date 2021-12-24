import axios from 'axios'

const toggleFavorites = (productId) => axios.post(`/api/favorites/${productId}`)

const getFavorites = () => axios('/api/favorites/')

const getFavoritesIds = () => axios('/api/favorites/ids')

export default {
	toggleFavorites,
	getFavorites,
	getFavoritesIds
}