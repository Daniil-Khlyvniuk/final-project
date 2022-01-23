import axios from 'axios'

const getAuthHeader = () => ({
	header: localStorage.getItem('userToken')
})

const placeOrder = (newOrder) => axios.post('/api/orders', newOrder)
// please look up in docs what to put in newOrder

// eslint-disable-next-line max-len
const updateOrder = (updatedOrder, orderId) => axios.put(`/orders/${orderId}`, updatedOrder)
// updatedOrder is an obejct with parameters you want to add or edit

const cancelOrder = (orderId) => axios.put(`/orders/cancel/${orderId}`)
// turns parameter canceled to true and sends email to customer

const deleteOrder = (orderId) => axios.delete(`/orders/${orderId}`)

const getCustomerOrders = () => axios.get('/orders')
// gets all the orders of a current customer. Requires authorization

const getOrderByOrderNo = (orderNo) => axios.get(`/orders/${orderNo}`)
// orderNo is assigned to the order by the system atomatically, when it is created

export const getUserOrders = () => axios.get('/api/orders', getAuthHeader())

export default {
	placeOrder,
	updateOrder,
	cancelOrder,
	deleteOrder,
	getCustomerOrders,
	getOrderByOrderNo
}