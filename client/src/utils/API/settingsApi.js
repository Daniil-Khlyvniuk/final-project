import axios from 'axios'

const getSettings = () => axios('/api/configs')

export default {
	getSettings,
}