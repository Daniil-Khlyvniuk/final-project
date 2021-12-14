// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import useSnack from '../../utils/customHooks/useSnack'

const UseMakeFullProduct = () => {
	const [product, setProduct] = useState([])
	const { handleSnack } = useSnack()

	useEffect(() => {
		axios('http://localhost:5000/api/products')
			.then(res => {
				setProduct(res.data)
			})
			.catch(err => {
				handleSnack({ message: err, style: 'warning' })
			})
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {

	}, [product])
}

export default UseMakeFullProduct