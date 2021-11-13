import axios from 'axios'

export const registerCustomer = (data) => axios.post('/api/customers/', data)
// eslint-disable-next-line no-console
// export const registerCustomer = (data) => console.log('data',data.login)

export const loginCustomer = () => axios.post('/api/customers/login')
