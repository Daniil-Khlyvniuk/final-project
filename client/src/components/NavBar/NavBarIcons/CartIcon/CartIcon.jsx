import React from 'react'
import Badge from '@mui/material/Badge'
import IconButton from '@mui/material/IconButton'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import { useStyles } from './styles'
import { useSelector, useDispatch } from 'react-redux'
import modalActions from '../../../../store/Modal'
import CartModal from '../../../Modal/CartModal'
import { shoppingBagSelectors } from "../../../../store/ShoppingBag"

const Carticon = () => {
	const classes = useStyles()
  const dispatch = useDispatch()
	// const handleOpen = (content) => dispatch(modalActions.handleOpen(content))
  const shoppingBag = useSelector(shoppingBagSelectors.getShoppingBag())

	return (
		<IconButton 
      aria-label="cart" 
      sx={{ padding: 0 }}
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