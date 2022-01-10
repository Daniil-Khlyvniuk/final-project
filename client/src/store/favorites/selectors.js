const getFavorites = () => state => state.favorites.data
const getFavoritesID = () => state => state.favorites.id
const isLoading = () => state => state.favorites.isLoading
const isFavorite = (id) => state => state.favorites.id.find(
	product => product === id
)

export default {
	getFavorites,
	getFavoritesID,
	isLoading,
	isFavorite,
}