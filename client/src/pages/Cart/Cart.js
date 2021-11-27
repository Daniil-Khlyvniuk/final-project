import React from 'react'
import {Button, Container, Typography} from '@mui/material'
import {useStyles} from './styles'
import {Link} from 'react-router-dom'
import ShoppingBagCard from '../../components/ShoppingBagCard/ShoppingBagCard'
import useHandleShoppingBag from '../../utils/customHooks/useHandleShoppingBag'

const Cart = () => {
	const classes = useStyles()
	const {shoppingBag,totalPrice} = useHandleShoppingBag()

	return (
		<Container maxWidth="lg">
			{shoppingBag?.length > 0 && <>
				<div style={{display: 'flex', justifyContent: 'space-between'}}>
					<Typography fontSize={32} sx={{mb: '14px', mt: '85px'}} variant={'h2'}>Shopping Bag</Typography>
					<Typography fontSize={32} sx={{mb: '14px', mt: '85px'}} variant={'h2'}>TOTAL USD ${totalPrice}</Typography>
				</div>
				<div className={classes.cards}>
					{shoppingBag
						?.map((item, key) => <ShoppingBagCard key={key} {...item}/>)}
				</div>
				<Button variant={'contained'} style={{display: 'block', margin: '0 auto 1rem'}}>PROCEED TO CHECKOUT</Button>
			</>}
			{shoppingBag?.length === 0 && <div style={{textAlign: 'center', margin: '7rem 0'}}>
				<Typography fontSize={32} sx={{mb: '14px', mt: '85px'}} variant={'h2'}>YOUR BAG IS FEELING LONELY - ADD
					SOME BEAUTIFUL NEW TO IT!</Typography>
				<Link exact to={'/shop/catalog'} style={{textDecoration: 'none'}}>
					<Button variant={'contained'} style={{marginTop: '2rem'}}>CONTINUE SHOPPING</Button></Link>
			</div>}
		</Container>
	)
}

export default Cart
