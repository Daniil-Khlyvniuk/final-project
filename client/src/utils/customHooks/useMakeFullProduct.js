// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UseMakeFullProduct = () => {
	const [product, setProduct] = useState([])

	useEffect(() => {
		axios('http://localhost:5000/api/products')
			.then(res => {
				setProduct(res.data)
			})
			.catch(err => {
				// eslint-disable-next-line no-console
				console.log('err', err)
			})
	}, [])

	useEffect(() => {

	}, [product])
}

export default UseMakeFullProduct