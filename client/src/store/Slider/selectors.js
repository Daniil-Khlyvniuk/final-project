const getSlides = () => (state) => state.slides.data
const getIsLoading = () => (state) => state.slides.getIsLoading
const getError = () => (state) => state.slides.error

export default {
	getSlides,
	getIsLoading,
	getError,
}