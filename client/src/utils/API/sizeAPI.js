import axios from 'axios'

const getSizes = () => axios('/api/sizes')

export default {
	getSizes,
}
