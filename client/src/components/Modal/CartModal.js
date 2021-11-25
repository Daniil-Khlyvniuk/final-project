import React from 'react'
import BasicModal from './Modal'
import PropTypes from 'prop-types'
import useHandleShoppingBag from '../../hooks/shoppingBag/useHandleShoppingBag'
import CardInModal from '../CardInModal/CardInModal'
import { Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const style = {
	modal: {
		position: 'absolute',
		overflowY: 'scroll',
		top: '50%',
		left: '50%',
		width: 340,
		transform: 'translate(-50%, -50%)',
		bgcolor: '#fff',
		padding: '15px 10px 0',
		maxHeight: '80vh'
	},
	link: {
		textDecoration: 'none',
		display: 'block',
		width: '100%',
		margin: '1.5rem 0'
	},
	button: {
		width: '100%'
	},
	title: {
		margin: '3rem 0'
	}
}

const CartModal = ({ handleClose, openModal }) => {
	const { shoppingBag, totalPrice } = useHandleShoppingBag()
	console.log(shoppingBag)

	return (
		<BasicModal
			style={style.modal}
			body={<>
				<Typography fontSize={18} sx={{ mb: '14px', mt: '85px' }} variant={'p'} style={style.title}>TOTAL: USD
          ${totalPrice}</Typography>
				<Link exact to={'/cart'} style={style.link}>
					<Button onClick={handleClose} variant={'contained'} style={style.button}>CHECKOUT</Button>
				</Link>
				<div style={{ overflowY: 'scroll' }}>{shoppingBag?.map((item, key) => <CardInModal
					price={item?.currentPrice}
					image={'/' + item?.imageUrls[0]}
					title={item?.product?.name}
					key={key}
					size={item?.size?.name}
					color={item?.color?.name}
					amount={item?.amount}
				/>)}</div>
			</>}
			handleClose={handleClose}
			openModal={openModal}
		/>
	)
}

export default CartModal

CartModal.propTypes = {
	handleClose: PropTypes.func,
	openModal: PropTypes.bool,
}
