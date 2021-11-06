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
									dangerouslySetInnerHTML={{__html: link.description }} 
								>
									{/* {link.description} */}
								</Link>
							</ListItem>
						)
					)
				}
			</List>
		</Grid>
	)
}

PageLinks.propTypes = {
	linksArr: PropTypes.shape({
		title: PropTypes.string,
		links: PropTypes.arrayOf(PropTypes.shape({
			description: PropTypes.string,
			url: PropTypes.string
		}))
	}),
}


export default PageLinks
