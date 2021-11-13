// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UseMakeFullProduct = () => {
	const [ product, setProduct ] = useState([])
	// const [] = useState([])
	// eslint-disable-next-line no-console
	// console.log('product', product)

	useEffect(() => {
		axios('http://localhost:5000/api/products')
			.then(res => {
				setProduct(res.data)
			})
			.catch(err => {
				// eslint-disable-next-line no-console
				console.log('ИДИ НАХУЙ', err)
			})
	}, [])

	useEffect(() => {

	}, [product])
}

export default UseMakeFullProduct