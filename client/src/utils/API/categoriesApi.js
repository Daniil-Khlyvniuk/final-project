import axios from 'axios'

const getCategories = () => {
	return axios('http://localhost:5000/api/catalog')
}

export default { getCategories }