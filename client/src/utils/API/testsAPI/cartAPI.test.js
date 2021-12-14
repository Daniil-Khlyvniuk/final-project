import React from	'react'
import axios from 'axios'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYWY3NTEzNzRmNjc0NzdiODg3ZTY4NiIsImZpcnN0TmFtZSI6IlZlcnl0c2tpIiwibGFzdE5hbWUiOiJWZXJ5dHNraSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2Mzk0MTc4MDIsImV4cCI6MTYzOTQ1MzgwMn0.oKJmR_aHCf7bD6xP-b5npPWmBheXuLJhV58oxnTi2YU'

const mockGetToCart =  async () => {
	const url = `/api/cart`
	return await axios.get(url, token)
}
const mockPutProductToCart = async prodId => {
	const url = `/api/cart/${prodId}`
	return await axios.put(url,{}, token)
}

const mockDeleteProduct = async prodId => {
	const url = `/api/cart/${prodId}`
	return await axios.delete(url, token)
}

const mockAddOrders = async (newOrder) => {
  const url = `/api/orders`
	return await axios.post(url, newOrder,token)
}
describe("testing request to cart api", () => {
	it('should get cart info',  async () => {
		jest.spyOn(axios, 'get').mockResolvedValue({})
		await  expect(mockGetToCart()).resolves.toMatchObject({})
	})

	it('should put to cart', async () => {
		jest.spyOn(axios, 'put').mockReturnValue({})
		await expect(mockPutProductToCart('5d73ad04fcad90130470f08b')).resolves.toMatchObject({})
	})

	it('should delete from cart', async () => {
		jest.spyOn(axios, 'delete').mockReturnValue({})
		await expect(mockDeleteProduct('5d73ad04fcad90130470f08b')).resolves.toMatchObject({})
	})
	it('should post from cart', async () => {
		const newOrder = {
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
		};
		jest.spyOn(axios, 'post').mockReturnValue({})
		await expect(mockAddOrders(newOrder)).resolves.toMatchObject({})
	})



	it('bad GET response', async ()=>{
		axios.get.mockImplementation(()=> Promise.reject({}))
	})
	it('bad PUT response', async ()=>{
		axios.put.mockImplementation(()=> Promise.reject({}))
	})
	it('bad DELETE response', async ()=>{
		axios.delete.mockImplementation(()=> Promise.reject({}))
	})
})