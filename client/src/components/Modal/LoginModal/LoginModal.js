import React from 'react'
import Form from '../../Form/Form'
import BasicModal from '../Modal'
import { style } from './styles'

const LoginModal = () => {
	return (
		<BasicModal
			style={style}
			body={<Form />}
		/>
	)
}

export default LoginModal