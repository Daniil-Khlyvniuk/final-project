import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import SearchIcon from './SearchIcon/SearchIcon'
import { Search, StyledAlert, StyledInputBase } from './styles'

import defProducts from './products.json'

const HeaderSearch = () => {
	const [products, setProducts] = useState([])
	const [search, setSearch] = useState('')
	const [warning, setWarning] = useState('')

	useEffect(() => {
		setTimeout(() => {
			const productNotFound = <StyledAlert severity="info">Product not found</StyledAlert>
			setWarning(productNotFound)
		}, 3000)
	})

	const handleChange = (e) => {
		if (!e.target.value) {
			setProducts(defProducts)
			setSearch('')
			return
		}

		setSearch(e.target.value)
		setProducts(
			defProducts.filter((good) =>
				good.name.toLowerCase().includes(e.target.value.toLowerCase()) || 
				good.color.toLowerCase().includes(e.target.value.toLowerCase())
			))
	}

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