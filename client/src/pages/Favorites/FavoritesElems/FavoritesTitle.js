import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import PropTypes from 'prop-types'
import React from 'react'
import EmptyFavorites from './EmptyFavotites'


const FavoritesTitle = ({ isEmpty }) => {
	return (
		isEmpty
			?
			<EmptyFavorites />
			:
			<Box style={ { display: 'flex', justifyContent: 'space-between' } }>
				<Typography
					fontSize={ 32 }
					sx={ { mb: '14px', mt: '30px' } }
					variant="h2"
				>
					Favorites
				</Typography>
			</Box>
	)
}

FavoritesTitle.propTypes = {
	isEmpty: PropTypes.bool.isRequired
}

export default FavoritesTitle