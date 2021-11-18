import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import categoriesAPI from '../../utils/API/categoriesApi'


const HeadSearch = () => {

	const [catalogs, setCatalogs] = useState([])
	
	const getCatalogFilters = async () => {
		const catalogRes = await categoriesAPI.getCategories()
		setCatalogs(catalogRes.data)
	}

	useEffect(()=> {
		getCatalogFilters()
	})

	return (
		<Grid item xs={12} 
			sx={{
				flexWrap:'wrap',
				display: 'flex',
				justifyContent: 'flex-start',
				margin: '20px auto',
				gap: '15px',
			}}
		>
			{catalogs.length && catalogs.map(catalog => (
				<Button
					key={catalog._id}
					color="primary"
					variant="outlined"
				>{catalog.name}
				</Button>
			))}
		</Grid>
	)
}

export default HeadSearch