import axios from 'axios'


export const registerUser = (data) => axios.post('/api/customers/', data)

export const loginUser = (data) => axios.post('/api/customers/login', data)

export const getUserByToken = () => axios('/api/customers/customer')

