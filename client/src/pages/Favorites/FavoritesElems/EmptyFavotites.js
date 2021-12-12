import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'


const EmptyFavorites = () => {
	return (
		<Box style={ { textAlign: 'center', margin: '7rem 0' } }>
			<Typography
				fontSize={ 32 }
				sx={ { mb: '14px', mt: '30px', textTransform: 'uppercase' } }
				variant="h2"
			>
				Oops! Your wish list is empty
			</Typography>
			<Typography
				fontSize={ 25 }
				variant="h4"
			>
				You can add items here if you haven&apos;t decided to buy them yet
			</Typography>
			<Link
				to={ '/shop/catalog' }
				style={ { textDecoration: 'none' } }
			>
				<Button
					variant="contained"
					style={ { marginTop: '2rem' } }
				>
					Continue shopping
				</Button>
			</Link>
		</Box>
	)
}

export default EmptyFavorites