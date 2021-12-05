import axios from 'axios'

const getCategories = () => axios('/api/catalog')

export default { getCategories }