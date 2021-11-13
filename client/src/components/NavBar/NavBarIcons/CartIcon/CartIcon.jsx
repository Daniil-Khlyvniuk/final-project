import React from 'react'
import { NavLink } from 'react-router-dom'
import Badge from '@mui/material/Badge'
import IconButton from '@mui/material/IconButton'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import { useStyles } from './styles'
import {useSelector} from "react-redux";
import {shoppingBagSelectors} from "../../../../store/ShoppingBag";

const Carticon = () => {
	const classes = useStyles()
	const shoppingBag = useSelector(shoppingBagSelectors.getShoppingBag())

	return (
		<IconButton aria-label="cart" sx={{ padding: 0 }}>
			<Badge badgeContent={shoppingBag?.length} color="success">
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