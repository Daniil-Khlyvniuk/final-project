import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, List, ListItem } from '@mui/material'
import PropTypes from 'prop-types'

const ShopLinks = ({styles}) => {

	const {boldText,notBoldText} = styles

	return (
		<Grid item xs={12} sm={3}>
			<List>
				<ListItem>
					<Link 
						to="/Shop" 
						className={boldText}
					>
									shop
					</Link>
				</ListItem>
				<ListItem>
					<Link 
						to="/catalog"
						className={notBoldText}
					>
									catalog
					</Link>
				</ListItem>
				<ListItem>
					<Link 
						to="/paymentAndDelivery"
						className={notBoldText}
					>
									payment & delivery
					</Link>
				</ListItem>
				<ListItem>
					<Link 
						to="/returns" 
						className={notBoldText}
					>
								returns
					</Link>
				</ListItem>
				<ListItem>
					<Link 
						to="/privacyAndPolicy"
						className={notBoldText}
					>
									privacy Policy
					</Link>
				</ListItem>
				<ListItem>
					<Link 
						to="/termsOfService"
						className={notBoldText}
					>
									terms of service
					</Link>
				</ListItem>
			</List>
		</Grid>
	)
}

ShopLinks.propTypes = {
	styles: PropTypes.object.isRequired,
}

export default ShopLinks
