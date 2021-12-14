import React from 'react'
import axios from 'axios'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYWY3NTEzNzRmNjc0NzdiODg3ZTY4NiIsImZpcnN0TmFtZSI6IlZlcnl0c2tpIiwibGFzdE5hbWUiOiJWZXJ5dHNraSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2Mzk0MTc4MDIsImV4cCI6MTYzOTQ1MzgwMn0.oKJmR_aHCf7bD6xP-b5npPWmBheXuLJhV58oxnTi2YU'

const prodId = '5d73ad04fcad90130470f08b'

const mockPlaceOrder = async newOrder => {
	const url = `/api/orders`
	return await axios.post(url, newOrder, token)
}

const mockUpdateOrder = async (orderId, updatedOrder)=>{
	const url = `/orders/${orderId}`
	return await axios.put(url, updatedOrder)
}
const mockCancelOrder = async (orderId)=>{
	const url = `/orders/${orderId}`
	return await axios.delete(`/orders/${orderId}`)
}


describe('testing orders api request', () => {
	it('should place order', async () => {
		const updatedOrder = {
			customerId: "5d99ce196d40fb1b747bc5f5",
			deliveryAddress: {
				country: "Ukraine",
				city: "Kiev",
				address: "Kreshchatic Street 56//A",
				postal: "01044"
			},
			shipping: "Kiev 50UAH",
			paymentInfo: "Credit card",
			status: "not shipped",
			email: "saribeg@gmail.com",
			mobile: "+380630000000",
			letterSubject: "Thank you for order! You are welcome!",
			letterHtml:
				"<h1>Your order is placed. OrderNo is 023689452.</h1><p>{Other details about order in your HTML}</p>"
		}
		jest.spyOn(axios, 'post').mockReturnValue({
			'order': {
				'products': [
					{
						'_id': '5dac45d43c026f0dac1b3464',
						'product': {
							'enabled': true,
							'imageUrls': [
								'img/products/men/001.png',
								'img/products/men/002.png',
								'img/products/men/003.png',
								'img/products/men/004.png'
							],
							'quantity': 156,
							'_id': '5da463678cca382250dd7bc7',
							'name': 'updted product for testing purposes 222',
							'currentPrice': 100,
							'previousPrice': 250
						},
						'cartQuantity': 2
					}
				],
				'canceled': false,
				'_id': '5dac45d53c026f0dac1b3465',
				'customerId': {
					'isAdmin': true,
					'enabled': true,
					'_id': '5d99ce196d40fb1b747bc5f5',
					'firstName': 'Customer',
					'lastName': 'Newone',
					'login': 'Customer'
				}
			}
		})
		await expect(mockPlaceOrder(updatedOrder)).resolves.toMatchObject({})
	})
	it('should update order', async () => {
		const updatedOrder = {
			status: "shipped"
		};
		jest.spyOn(axios, 'put').mockReturnValue({
			'order': {
				'products': [
					{
						'_id': '5dac45d43c026f0dac1b3464',
						'product': {
							'enabled': true,
							'imageUrls': [
								'img/products/men/001.png',
								'img/products/men/002.png',
								'img/products/men/003.png',
								'img/products/men/004.png'
							],
							'quantity': 156,
							'_id': '5da463678cca382250dd7bc7',
							'name': 'updted product for testing purposes 222',
							'currentPrice': 100,
							'previousPrice': 250
						},
						'cartQuantity': 2
					}
				],
				'canceled': false,
				'_id': '5dac45d53c026f0dac1b3465',
				'customerId': {
					'isAdmin': true,
					'enabled': true,
					'_id': '5d99ce196d40fb1b747bc5f5',
					'firstName': 'Customer',
					'lastName': 'Newone',
					'login': 'Customer'
				}
			}
		})
		await expect(mockUpdateOrder(prodId,updatedOrder)).resolves.toMatchObject({})
	})
	it('should delete order', async () => {
		jest.spyOn(axios, 'delete').mockReturnValue({
			"message": "Order witn id \"5dac45d53c026f0dac1b3465\" is successfully deletes from DB. Order Details: { products: \n   [ { _id: '5dac20058b2cb420e0af4677',\n       product: [Object],\n       cartQuantity: 33 },\n     { _id: '5dac20058b2cb420e0af4676',\n       product: [Object],\n       cartQuantity: 3 } ],\n  canceled: true,\n  _id: 5dac45d53c026f0dac1b3465,\n  customerId: 5d99ce196d40fb1b747bc5f5,\n  deliveryAddress: \n   { country: 'Ukraine',\n     city: 'Kiev',\n     address: 'Kreshchatic Street 56//A',\n     postal: '01044' },\n  shipping: 'Kiev 50UAH',\n  paymentInfo: 'Credit card',\n  status: 'shipped',\n  email: 'saribeg@gmail.com',\n  mobile: '+380630000000',\n  letterSubject: 'Thank you for order! You are welcome!',\n  letterHtml: 'sfsdfsdfsdfsdf',\n  orderNo: '7553616',\n  totalSum: 4140,\n  date: 2019-10-20T11:32:37.035Z,\n  __v: 0 }"
		})
		await expect(mockCancelOrder(prodId)).resolves.toMatchObject({})
	})

	it('bad delete response', async () => {
		axios.delete.mockImplementation(() => Promise.reject({}))
	})
	it('bad GET response', async () => {
		axios.get.mockImplementation(() => Promise.reject({}))
	})
	it('bad PUT response', async () => {
		axios.put.mockImplementation(() => Promise.reject({}))
	})
})