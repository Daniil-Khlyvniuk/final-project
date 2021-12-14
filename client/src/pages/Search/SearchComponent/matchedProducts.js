import { Box, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'
import DropDownSelect from '../../../components/Catalog/DropDownSelect'


const MatchedProducts = (
	{
		search_term,
		perPageArray,
		perPage,
		setPerPage
	}) => {
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
				{ `Search results for "${ search_term }"` }
			</Typography>
			{ perPageArray.length && (
				<DropDownSelect
					arrayToIterate={ perPageArray }
					selectedValue={ perPage }
					selectHandler={ setPerPage }
					label={ 'Show' }
				/>
			) }
		</Box>
	)
}

MatchedProducts.propTypes = {
	search_term: PropTypes.string.isRequired,
	perPageArray: PropTypes.array.isRequired,
	perPage: PropTypes.number.isRequired,
	setPerPage: PropTypes.func.isRequired
}

export default MatchedProducts