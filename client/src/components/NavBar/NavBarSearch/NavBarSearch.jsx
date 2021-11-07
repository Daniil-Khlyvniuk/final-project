// import { Box } from '@mui/system'
// import React, { useState } from 'react'
// import SearchIcon from './SearchIcon/SearchIcon'
// import { Search, StyledAlert, StyledInputBase } from './styles'
// import { useDispatch, useSelector } from 'react-redux'
// // import { setAllProducts } from '../../../store/Products/productsSlice'
// import {productsActions, productsOperations, productsSelectors } from '../../../store/Products'

// const HeaderSearch = () => {
// 	const getProductsList = useSelector(productsSelectors.getProducts())
// 	const [search, setSearch] = useState('')
// 	const dispatch = useDispatch()
// 	let timer

// 	const handleChange = (e) => {
// 		clearTimeout(timer)

// 		timer = setTimeout(() => {
// 			if (!e.target.value) {
// 				dispatch(productsOperations.fetchProducts())
// 				setSearch('')
// 				return
// 			}

// 			dispatch(productsActions.setAllProducts(
// 				getProductsList.filter((good) =>
// 					good.name.toLowerCase().includes(e.target.value.toLowerCase())
// 				)
// 			))
// 		}, 1000)
// 		setSearch(e.target.value)
// 	}

// 	const warning = <StyledAlert severity="info">Product not found</StyledAlert>

// 	return (
// 		<Box>
// 			<Search>
// 				<SearchIcon />
// 				<StyledInputBase
// 					placeholder="Search..."
// 					type='search'
// 					value={search}
// 					onChange={handleChange}
// 					sx={{ borderBottom: '1px solid #373F41' }}
// 				/>
// 			</Search>
// 			{!getProductsList.length && search && warning}
// 		</Box>
// 	)
// }

// export default HeaderSearch

import * as React from 'react'
import TextField from '@mui/material/TextField'
import SearchIcon from './SearchIcon/SearchIcon'
import { StyledAutocomplete, StyledBox } from './styles'
// import { productsActions } from '../../../store/Products'

const products = [
	{
		label: 'Cotton Dark Blue Bed Linen',
		price: '$280',
		img: 'img/card1.png'
	},
	{
		label: 'Phistachio French Linen',
		price: '$220',
		img: 'img/card2.png'
	},
	{
		label: 'Light Pink Bed Linen',
		price: '$270',
		img: 'img/card3.png'
	},
	{
		label: 'French Dark Green Linen',
		price: '$250',
		img: 'img/card4.png'
	}
]

const HeaderSearch = () => {
	return (
		<StyledBox>
			<StyledAutocomplete
				disablePortal
				id="combo-box-demo"
				options={products}
				// options={productsActions.setAllProducts()}
				size='small'
				renderInput={(params) => <TextField {...params} label="Search..." />}
			/>
			<SearchIcon />
		</StyledBox>
	)
}

export default HeaderSearch