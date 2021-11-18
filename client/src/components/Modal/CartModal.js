import React from 'react'
import BasicModal from './Modal'

const style = {
	position: 'absolute',
	top: '8%',
	left: '65%',
	width: 340,
	// transform: 'translate(-50%, -50%)',
	bgcolor: '#fff',
	padding: '15px 10px 0',
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