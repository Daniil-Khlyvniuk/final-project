import React from	'react'
import axios from 'axios'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYWY3NTEzNzRmNjc0NzdiODg3ZTY4NiIsImZpcnN0TmFtZSI6IlZlcnl0c2tpIiwibGFzdE5hbWUiOiJWZXJ5dHNraSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2Mzk0MTc4MDIsImV4cCI6MTYzOTQ1MzgwMn0.oKJmR_aHCf7bD6xP-b5npPWmBheXuLJhV58oxnTi2YU'

const prodId = '5d73ad04fcad90130470f08b'

const mockGetOneProduct = async productId =>{
	const url = `/api/products/${productId}`
	return await axios.get(url, token)
}
const mockAddNewProduct = async product =>{
	const url = '/api/products'
	return await axios.post(url, product, token)
}
const mockUpdateProduct = async (productId, updatedProduct) => {
	const url = `/api/products/${productId}`
	return await axios.put(url, updatedProduct, token)
}

describe('testing request to products api', ()=>{
	it('should get one product from cart', async () => {
		jest.spyOn(axios, 'get').mockReturnValue({})
		await expect(mockGetOneProduct(prodId)).resolves.toMatchObject({})
	})

	it('should add enw product to cart', async () => {
		const newProd = {
			name: "new product for testing purposes",
			currentPrice: 199.99,
			previousPrice: 250,
			categories: "men",
			quantity: 100,
			color: "red",
			productUrl: "/men",
			brand: "braaaand",
			myCustomParam: "some string or json for custom param"
		};
		jest.spyOn(axios, 'post').mockReturnValue({
			"enabled": true,
			"imageUrls": [
				"img/products/men/001.png",
				"img/products/men/002.png",
				"img/products/men/003.png",
				"img/products/men/004.png"
			],
			"quantity": 100,
			"_id": "5da463678cca382250dd7bc7",
			"name": "new product for testing purposes",
			"currentPrice": 199.99,
			"previousPrice": 250,
			"categories": "men",
			"color": "red",
			"productUrl": "/men",
			"brand": "braaaand",
			"myCustomParam": "some string or json for custom param",
			"itemNo": "291759",
			"date": "2019-10-14T12:00:39.679Z",
			"__v": 0
		})
		await expect(mockAddNewProduct(newProd)).resolves.toMatchObject({})
	})

	it('should update product in cart', async () => {
		const updatedProduct = {
			name: "Updted product for testing purposes 222",
			quantity: 156,
			currentPrice: 100,
			brand: "new brand",
			oneMoreCustomParam: `{"description": "blablabla", "rate": 4.8, "likes": 20}`
		};
		jest.spyOn(axios, 'put').mockReturnValue({
			"enabled": true,
			"imageUrls": [
				"img/products/men/001.png"
			],
			"quantity": 156,
			"_id": "5da463678cca382250dd7bc7",
			"name": "updted product for testing purposes 222",
			"currentPrice": 100,
			"previousPrice": 250,
			"categories": "men",
			"color": "red",
			"productUrl": "/men",
			"brand": "braaaand",
			"myCustomParam": "some string or json for custom param",
			"itemNo": "291759",
			"date": "2019-10-14T12:00:39.679Z",
			"__v": 0,
			"oneMoreCustomParam": {
				"description": "blablabla",
				"rate": 4.8,
				"likes": 20
			}
		})
		await expect(mockUpdateProduct(prodId,updatedProduct)).resolves.toMatchObject({})
	})

	it('bad GET response', async ()=>{
		axios.get.mockImplementation(()=> Promise.reject({}))
	})

})