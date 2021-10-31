import React from 'react'
import { NavLink } from 'react-router-dom'
import Badge from '@mui/material/Badge'
import IconButton from '@mui/material/IconButton'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import { useStyles } from './styles'

const Carticon = () => {
	const classes = useStyles()

	return (
		<IconButton aria-label="cart" sx={{ padding: 0 }}>
			<Badge badgeContent={4} color="success">
				<NavLink exact to='/cart' className={classes.navbarLink}>
					<LocalMallIcon />
				</NavLink>
			</Badge>
		</IconButton>
	)
}

export default Carticon

// badgeContent={} 
// должен подтягивать информацию с сервера
// (длинна массива добавленных в корзину товаров)