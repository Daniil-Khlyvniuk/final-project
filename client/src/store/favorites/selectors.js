const getFavorites = () => state => state.favorites.data
const isLoading = () => state => state.favorites.isLoading
const isFavorite = (id) => state => state.favorites.data.find(
	product => product === id
)

export default {
	getFavorites,
	isLoading,
	isFavorite,
}