import * as React from 'react'
import Button from '@mui/material/Button'
import { button } from '../Stripe/style'
import { Link } from 'react-router-dom'


export default function Btn() {


	return (
		<Button
			variant="contained"
			style={button}
			component={Link}
			to='/complete-order'
		>
      NEXT
		</Button>
	)
}