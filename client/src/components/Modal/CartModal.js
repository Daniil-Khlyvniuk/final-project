import React from 'react'
import BasicModal from './Modal'

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	bgcolor: '#fff',
	padding: '20px',
}

const CartModal = () => {
	return (
		<BasicModal
			style={style}
			body={'Cart Modal - in progress...'}
		/>
	)
}

export default CartModal