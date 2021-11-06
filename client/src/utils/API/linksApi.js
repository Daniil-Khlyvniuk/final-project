import axios from 'axios'

const getLinks = () => {
	const res = axios('/links.json')

	// console.log('getLinks',res)

	return res
}

export default {getLinks}