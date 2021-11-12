import React from 'react'
import Badge from '@mui/material/Badge'
import IconButton from '@mui/material/IconButton'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import { useStyles } from './styles'
import { useDispatch } from 'react-redux'
import modalActions from '../../../../store/Modal'
import CartModal from '../../../Modal/CartModal'

const Carticon = () => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const handleOpen = (content) => dispatch(modalActions.handleOpen(content))

	return (
		<IconButton aria-label="cart" sx={{ padding: 0 }} onClick={() => handleOpen(<CartModal />)}>
			<Badge badgeContent={4} color="success" className={classes.navbarLink}>
				<LocalMallIcon />
			</Badge>
		</IconButton>
	)
}

export default Carticon

// badgeContent={} 
// должен подтягивать информацию с сервера
// (длинна массива добавленных в корзину товаров)