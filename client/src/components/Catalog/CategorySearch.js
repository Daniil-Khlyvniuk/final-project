import React, { useEffect, useState } from 'react'
import {Box} from '@mui/material'
import categoriesAPI from '../../utils/API/categoriesApi'
import CategorySearchItem from './CategorySearchItem'

const CategorySearch = () => {

	const [catalogs, setCatalogs] = useState([])
	const getCategoryFilters = async () => {
		const catalogRes = await categoriesAPI.getCategories()
		setCatalogs(catalogRes.data)
	}

	useEffect(()=> {
		getCategoryFilters()
	},[])

	return (
		<Box
			sx={{
				flexWrap:'wrap',
				display: 'flex',
				justifyContent: 'flex-start',
				margin: '20px auto',
				gap: '15px',
			}}
		>

			{catalogs.length && catalogs.map(catalog => (
				<CategorySearchItem key={catalog._id} catalog={catalog} />
			))}
		</Box>
	)
}

export default CategorySearch