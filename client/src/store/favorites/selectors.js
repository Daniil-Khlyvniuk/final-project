const getFavorites = () => state => state.favorites.data
const isLoading = () => state => state.favorites.isLoading

export default {
	getFavorites,
	isLoading
}