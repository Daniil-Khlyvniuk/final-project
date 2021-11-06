import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Grid, List, ListItem, Typography, Link } from '@mui/material'
// import { Grid, List, ListItem, Typography } from '@mui/material'
import PropTypes from 'prop-types'

const PageLinks = ({linksArr}) => 
{
	return (
		<Grid item xs={12} sm={3}>
			<List>
				
				{/* <Link 
						to="/shop" 
						component={RouterLink}
						variant={'bold'}
					>
						shop
					</Link> */}
				{linksArr.title && (
					<ListItem>
						<Typography
							variant="menuBold"
						>
							{linksArr.title}
						</Typography>
					</ListItem>
				)}
				
				{
					linksArr.links.length > 0 && linksArr.links.map(link => 
						(
							<ListItem key={link._id}>
								<Link 
									to={link.url}
									component={RouterLink}
									variant={'semiBold'}
								>
									{link.description}
								</Link>
							</ListItem>
						)
					)
				}
				{/* <ListItem>
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
				</ListItem> */}
			</List>
		</Grid>
	)
}

PageLinks.propTypes = {
	linksArr: PropTypes.shape({
		// _id: PropTypes.string,
		title: PropTypes.string,
		links: PropTypes.arrayOf(PropTypes.shape({
			// _id: PropTypes.string,
			description: PropTypes.string,
			url: PropTypes.string
		}))
	}),
}


export default PageLinks
