import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'


const EmptyBag = () => {
	return (
		<Box style={ { textAlign: 'center', margin: '7rem 0' } }>
			<Typography
				fontSize={ 32 }
				sx={ { mb: '14px', mt: '85px' } }
				variant={ 'h2' }
			>
				YOUR BAG IS FEELING LONELY - ADD SOME BEAUTIFUL NEW TO IT!
			</Typography>
			<Link
				exact to={ '/shop/catalog' }
				style={ { textDecoration: 'none' } }
			>
				<Button
					variant={ 'contained' }
					style={ { marginTop: '2rem' } }
				>
					CONTINUE SHOPPING
				</Button>
			</Link>
		</Box>
	)
}

export default EmptyBag