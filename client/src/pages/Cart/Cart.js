// eslint-disable-next-line no-unused-vars
import React from 'react'
import useHandleShoppingBag from '../../utils/customHooks/useHandleShoppingBag'
import { Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import Stepper from '../../components/Stepper/Stepper'

const Cart = () => {
	const { shoppingBag} = useHandleShoppingBag()
	return <>
		{shoppingBag?.length === 0 ? <div style={{ textAlign: 'center', margin: '7rem 0' }}>
			<Typography fontSize={32} sx={{ mb: '14px', mt: '85px' }} variant={'h2'}>YOUR BAG IS FEELING LONELY - ADD
      SOME BEAUTIFUL NEW TO IT!</Typography>
			<Link exact to={'/shop/catalog'} style={{ textDecoration: 'none' }}>
				<Button variant={'contained'} style={{ marginTop: '2rem' }}>CONTINUE SHOPPING</Button></Link>
		</div> : <Stepper/>}
	</>
}

export default Cart
