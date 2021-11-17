import axios from 'axios'

const getFiltersByType = (type) =>  axios(`/api/filters/${type}`)

export default {
	getFiltersByType,
}