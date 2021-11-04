import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Grid, List, ListItem, Link } from '@mui/material'

const AboutLinks = () => {
	return (
		<Grid item xs={12} sm={3}>
			<List>
				<ListItem>
					<Link 
						to="/about" 
						component={RouterLink}
						variant={'bold'}
					>
						about
					</Link>
				</ListItem>
				<ListItem>
					<Link 
						to="/aboutus"
						component={RouterLink}
						variant={'semiBold'}
					>
						about us
					</Link>
				</ListItem>
				<ListItem>
					<Link 
						to="/reviews" 
						component={RouterLink}
						variant={'semiBold'}
					>
						reviews
					</Link>
				</ListItem>
				<ListItem>
					<Link 
						to="/blog"
						component={RouterLink}
						variant={'semiBold'}
					>
						blog
					</Link>
				</ListItem>
			</List> 
		</Grid>
	)
}

export default AboutLinks
