import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import categoriesAPI from '../../utils/API/categoriesApi'


// const headButton = {
//
// }

const HeadSearch = () => {

	const [catalogs, setCatalogs] = useState([])

	useEffect(async ()=> {
		const catalogRes = await categoriesAPI.getCategories()
		setCatalogs(catalogRes.data)
	})

	return (
		<Grid item xs={12} sx={{
			flexWrap:'wrap',
			display: 'flex',
			justifyContent: 'flex-start',
			margin: '50px auto',
			width: '900px',
			gap: '15px',
		}}>
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