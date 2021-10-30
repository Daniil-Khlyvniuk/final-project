import React from 'react'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import Badge from '@mui/material/Badge'
import IconButton from '@mui/material/IconButton'
import LocalMallIcon from '@mui/icons-material/LocalMall'

const useStyles = makeStyles(() => ({ 
	navbarLink: {
		color: '#373F41',
	}
}))

const Carticon = () => {
	const { navbarLink } = useStyles()

	return (
		<IconButton aria-label="cart" sx={{ padding: 0 }}>
			<Badge badgeContent={4} color="success">
				<NavLink exact to='/cart' className={navbarLink}>
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