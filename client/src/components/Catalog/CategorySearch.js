import React, { useEffect, useState } from 'react'
import {Box} from '@mui/material'
import categoriesAPI from '../../utils/API/categoriesApi'
import CategorySearchItem from './CategorySearchItem'
import {Category} from './style'

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
		<Box style={Category}>
			{catalogs.length && catalogs.map(catalog => (
				<CategorySearchItem key={catalog._id} catalog={catalog} />
			))}
		</Box>
	)
}

export default CategorySearch