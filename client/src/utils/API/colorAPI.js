import axios from 'axios'

const getColors = () => axios('/api/colors')

export default {
	getColors,
}
