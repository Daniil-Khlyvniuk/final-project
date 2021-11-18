import React from 'react'
import Form from '../Form/Form'
import BasicModal from './Modal'

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	bgcolor: '#fff',
	padding: '20px',
	['@media (max-width:440px)']: {
		padding: '5px'
	}
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