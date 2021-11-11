import React from 'react'
import Form from '../Form/Form'
import BasicModal from './Modal'

const style = {
	position: 'absolute',
	top: '8%',
	left: '24%',
	// transform: 'translate(-50%, -50%)',
	bgcolor: '#fff',
	padding: '20px',
}

const LoginModal = () => {
	return (
		<BasicModal
			style={style}
			body={<Form />}
		/>
	)
}

export default LoginModal