import * as React from 'react'
import Button from '@mui/material/Button'
import { button } from '../Stripe/style'
import useHandleShoppingBag from '../../utils/customHooks/useHandleShoppingBag'
import { Link } from 'react-router-dom'


export default function Btn() {
	const handleShoppingBag = useHandleShoppingBag()

	return (
		<Button
			variant="contained"
			style={button}
			component={Link}
			to='/complete-order'
			onClick={()=>  handleShoppingBag.AfterBuy()}
		>
      NEXT
		</Button>
	)
}