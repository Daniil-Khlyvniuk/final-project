import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Grid, List, ListItem, Link } from '@mui/material'

const ShopLinks = () => {
	return (
		<Grid item xs={12} sm={3}>
			<List>
				<ListItem>
					<Link 
						to="/shop" 
						component={RouterLink}
						variant={'bold'}
					>
						shop
					</Link>
				</ListItem>
				<ListItem>
					<Link 
						to="/catalog"
						component={RouterLink}
						variant={'semiBold'}
					>
						catalog
					</Link>
				</ListItem>
				<ListItem>
					<Link 
						to="/paymentanddelivery"
						component={RouterLink}
						variant={'semiBold'}
					>
						payment & delivery
					</Link>
				</ListItem>
				<ListItem>
					<Link 
						to="/returns" 
						component={RouterLink}
						variant={'semiBold'}
					>
						returns
					</Link>
				</ListItem>
				<ListItem>
					<Link 
						to="/privacypolicy"
						component={RouterLink}
						variant={'semiBold'}
					>
						privacy Policy
					</Link>
				</ListItem>
				<ListItem>
					<Link 
						to="/termsOfService"
						component={RouterLink}
						variant={'semiBold'}
					>
						terms of service
					</Link>
				</ListItem>
			</List>
		</Grid>
	)
}

export default ShopLinks
