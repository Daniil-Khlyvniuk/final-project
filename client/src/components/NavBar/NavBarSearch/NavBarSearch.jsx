import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import SearchIcon from './SearchIcon/SearchIcon'
import { Search, StyledAlert, StyledInputBase } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../../store/Products/productsSlice'

import defProducts from '../../../data/products.json'

const HeaderSearch = () => {
	const products = useSelector(state => state.products)
	const [search, setSearch] = useState('')
	const [warning, setWarning] = useState('')
	const dispatch = useDispatch()

	useEffect(() => {
		setTimeout(() => {
			const productNotFound = <StyledAlert severity="info">Product not found</StyledAlert>
			setWarning(productNotFound)
		}, 3000)
	})

	const handleChange = (e) => {
		if (!e.target.value) {
			dispatch(getAllProducts(defProducts))
			setSearch('')
			return
		}

		setSearch(e.target.value)
		dispatch(getAllProducts(
			defProducts.filter((good) =>
				good.title.toLowerCase().includes(e.target.value.toLowerCase())
			)))
	}

	console.log(products)

	return (
		<Box>
			<Search>
				<SearchIcon />
				<StyledInputBase
					placeholder="Search..."
					type='search'
					value={search}
					onChange={handleChange}
					sx={{ borderBottom: '1px solid #373F41' }}
				/>
			</Search>
			{!products.length && warning}
		</Box>
	)
}

export default HeaderSearch