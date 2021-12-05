import React from 'react'
import Badge from '@mui/material/Badge'
import IconButton from '@mui/material/IconButton'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import { useStyles } from './styles'
import { useSelector, useDispatch } from 'react-redux'
import modalActions from '../../../../store/Modal'
import CartModal from '../../../Modal/CartModal'
import { shoppingBagSelectors } from '../../../../store/ShoppingBag'
import { Box } from '@mui/system'

const Carticon = () => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const handleOpen = (content) => dispatch(modalActions.modalToggle(content))
	const shoppingBag = useSelector(shoppingBagSelectors.getShoppingBag())

	return (
		<IconButton
			aria-label="cart"
			sx={{ padding: 0 }}
			title='Cart'
			onClick={() => handleOpen(<CartModal />)}
		>
			<Badge badgeContent={shoppingBag?.length} color="success">
				<Box className={classes.navbarLink}>
					<LocalMallIcon />
				</Box>
			</Badge>
		</IconButton>
	)
}

export default Carticon