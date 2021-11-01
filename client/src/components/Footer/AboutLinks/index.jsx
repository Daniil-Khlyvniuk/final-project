import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, List, ListItem } from '@mui/material'
import PropTypes from 'prop-types'

const AboutLinks = ({styles}) => {
	const {boldText,notBoldText} = styles
	return (
		<Grid item xs={12} sm={3}>
			<List>
				<ListItem>
					<Link 
						to="/about" 
						className={boldText}
					>
								about
					</Link>
				</ListItem>
				<ListItem>
					<Link 
						to="/aboutus"
						className={notBoldText}
					>
									about us
					</Link>
				</ListItem>
				<ListItem>
					<Link 
						to="/reviews" 
						className={notBoldText}
					>
									reviews
					</Link>
				</ListItem>
				<ListItem>
					<Link 
						to="/blog"
						className={notBoldText}
					>
									blog
					</Link>
				</ListItem>
			</List> 
		</Grid>
	)
}

AboutLinks.propTypes = {
	styles: PropTypes.object.isRequired,
}

export default AboutLinks
