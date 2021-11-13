import axios from 'axios'

export const getSlide = () => {
	return axios('api/slides')
}
