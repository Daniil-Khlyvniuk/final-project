import axios from 'axios'

const getLinks = () => {
	return axios('/api/links')
}

export default {getLinks}