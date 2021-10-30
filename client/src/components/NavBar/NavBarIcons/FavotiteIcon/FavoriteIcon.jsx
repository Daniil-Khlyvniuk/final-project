import React from 'react'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { IconButton } from '@mui/material'

const useStyles = makeStyles(() => ({
	navbarLink: {
		color: '#373F41',
	}
}))

const Favoriteicon = () => {
	const { navbarLink } = useStyles()

	return (
		<IconButton aria-label="favorites" sx={{ padding: 0 }}>
			<NavLink exact to='/favorites' className={navbarLink}>
				<FavoriteBorderIcon />
			</NavLink>
		</IconButton>
	)
}

export default Favoriteicon