import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { IconButton } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import modalActions from '../../../store/Modal'
import LoginModal from '../../Modal/LoginModal'
import { userSelectors } from '../../../store/User'

const Favoriteicon = () => {
	const user = useSelector(userSelectors.getToken())
	const dispatch = useDispatch()
	const handleOpen = (content) => dispatch(modalActions.modalToggle(content))

	return (
		<IconButton
			aria-label="favorites"
			title='Add to Favorites'
			sx={{
				padding: 0,
				position: 'absolute',
				right: '10px',
				top: '10px',
				zIndex: 333
			}}
			onClick={!user ? () => handleOpen(<LoginModal />) : null}
		>
			<FavoriteBorderIcon fontSize="large" />
		</IconButton>
	)
}

export default Favoriteicon