import { Box, Typography } from '@mui/material'
import React from 'react'
import DropDownSelect from '../../../components/Catalog/DropDownSelect'


const MatchedProducts = () => {
	return (
		<Box
			sx={ {
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				mb: '14px',
				mt: '30px'
			} }>
			<Typography
				variant="h2"
				sx={ { fontSize: { md: 32, xs: 25 } } }
			>
				{/* eslint-disable-next-line no-undef */ }
				{ `Search results for "${ search_term }"` }
			</Typography>
			{/* eslint-disable-next-line no-undef */ }
			{ perPageArray.length && (
				<DropDownSelect
					/* eslint-disable-next-line no-undef */
					arrayToIterate={ perPageArray }
					/* eslint-disable-next-line no-undef */
					selectedValue={ perPage }
					/* eslint-disable-next-line no-undef */
					selectHandler={ setPerPage }
					label={ 'Show' }
				/>
			) }
		</Box>
	)
}

export default MatchedProducts