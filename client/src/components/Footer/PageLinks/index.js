import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Grid, List, ListItem, Typography, Link } from '@mui/material'
// import { Grid, List, ListItem, Typography } from '@mui/material'
import PropTypes from 'prop-types'

const PageLinks = ({linksArr}) => 
{
	return (
		<Grid item xs={12} sm={6} lg={3}>
			<List>
				{linksArr.title && (
					<ListItem 
						variant="footer-adaptive"
						sx={{
							justifyContent: {
								xs: 'center',
								lg: 'flex-start',
							}
						}}
					>
						<Typography
							variant="menuBold"
						>
							{linksArr.title}
						</Typography>
					</ListItem>
				)}

				{
					linksArr.links.length > 0 && linksArr.links.map(link => {
						return(
							<ListItem key={link._id}
								sx={{
									justifyContent: {
										xs: 'center',
										lg: 'flex-start',
									}
								}}
							>
								<Link
									to= {link.customId === 'catalog' ? '/shop/catalog' : `/info/${link.customId}` }
									component={RouterLink}
									variant={'semiBold'}
									dangerouslySetInnerHTML={{ __html: link.description }}
								>
									{/* {link.description} */}
								</Link>
							</ListItem>
						)
					}
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
