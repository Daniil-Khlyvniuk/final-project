import React, { useEffect, useState } from 'react'
import {Box} from '@mui/material'
import categoriesAPI from '../../utils/API/categoriesApi'
import CatalogSearchItem from './CatalogSearchItem'

const CatalogSearch = () => {

	const [catalogs, setCatalogs] = useState([])
	
	const getCatalogFilters = async () => {
		const catalogRes = await categoriesAPI.getCategories()
		setCatalogs(catalogRes.data)
	}

	useEffect(()=> {
		getCatalogFilters()
	})

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
				<CatalogSearchItem key={catalog._id} catalog={catalog} />
			))}
		</Box>
	)
}

export default CatalogSearch