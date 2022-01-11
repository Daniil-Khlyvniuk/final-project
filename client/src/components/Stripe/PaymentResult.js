import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import BackdropLoader from '../UI/BackdropLoader/BackdropLoader'
// import { Link } from 'react-router-dom'
// import Button from '@mui/material/Button'
const domain = 'https://fp-postil-bedding.herokuapp.com/'


const PaymentResult = () => {
	useEffect(()=> {
		return 	setTimeout(() => {
			window.location.href = `${domain}/complete-order`
		}, 3000)
	},[])
	return (
		<Box sx={{
			height: '500px'
		}}>
			<BackdropLoader open={true} />
		</Box>
	)
}

export default PaymentResult