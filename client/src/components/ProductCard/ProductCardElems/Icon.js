import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useSelector } from 'react-redux'
import { userSelectors } from '../../../store/user'
import { favoritesSelectors } from '../../../store/favorites'
import PropTypes from 'prop-types'

const Icon = ({ id }) => {
	const user = useSelector(userSelectors.getData())
	const isFavorite = useSelector(favoritesSelectors.isFavorite(id))

	return (
		isFavorite && user
			? <FavoriteIcon
				sx={{
					fontSize: {
						xl: '50px',
						lg: '50px',
						md: '40px',
						xs: '30px'
					}
				}}
			/>
			: <FavoriteBorderIcon
				sx={{
					fontSize: {
						xl: '50px',
						lg: '50px',
						md: '40px',
						xs: '30px'
					}
				}}
			/>
	)
}

Icon.propTypes = {
	id: PropTypes.string.isRequired,
}

export default Icon
