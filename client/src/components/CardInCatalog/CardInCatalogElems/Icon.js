import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useSelector } from 'react-redux'
import { userSelectors } from '../../../store/user'
import { favoritesSelectors } from '../../../store/favorites'
import { grey } from '@mui/material/colors'
import PropTypes from 'prop-types'

const Icon = ({ id }) => {
	const user = useSelector(userSelectors.getData())
	const isFavorite = useSelector(favoritesSelectors.isFavorite(id))

	return (
		isFavorite && user
			? <FavoriteIcon
				sx={{
					color: grey[50],
					fontSize: {
						xl: '35px',
						lg: '35px',
						md: '30px',
						sm: '30px',
						xs: '40px'
					}
				}}
			/>
			: <FavoriteBorderIcon
				sx={{
					color: grey[50],
					fontSize: {
						xl: '35px',
						lg: '35px',
						md: '30px',
						sm: '30px',
						xs: '40px'
					}
				}}
			/>
	)
}

Icon.propTypes = {
	id: PropTypes.string.isRequired,
}

export default Icon