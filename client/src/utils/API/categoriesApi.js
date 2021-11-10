import axios from 'axios'

const getCategories = () => {
	return axios('/api/catalog')
}

export default { getCategories }