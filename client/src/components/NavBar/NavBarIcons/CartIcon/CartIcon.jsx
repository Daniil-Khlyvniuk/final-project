import React from 'react'
import Badge from '@mui/material/Badge'
import IconButton from '@mui/material/IconButton'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import { useStyles } from './styles'
// eslint-disable-next-line no-unused-vars
import { useSelector, useDispatch } from 'react-redux'
// import modalActions from '../../../../store/Modal'
// import CartModal from '../../../Modal/CartModal'
import { shoppingBagSelectors } from '../../../../store/ShoppingBag'
import { NavLink } from 'react-router-dom'

const Carticon = () => {
	const classes = useStyles()
	// const dispatch = useDispatch()
	// const handleOpen = (content) => dispatch(modalActions.modalToggle(content))
	const shoppingBag = useSelector(shoppingBagSelectors.getShoppingBag())

	return (
		<IconButton
			aria-label="cart"
			sx={{ padding: 0 }}
			title='Cart'
		// onClick={() => handleOpen(<CartModal />)}
		>
			<Badge badgeContent={shoppingBag?.length} color="success">
				<NavLink exact to='/cart' className={classes.navbarLink}>
					<LocalMallIcon />
				</NavLink>
			</Badge>
		</IconButton>
	)
}

export default Carticon