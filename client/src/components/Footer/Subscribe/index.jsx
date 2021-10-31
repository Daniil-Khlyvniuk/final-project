import React from 'react'
import { makeStyles } from '@mui/styles'
import { Grid, List, ListItem, Typography,
	Link as LinkMui } from '@mui/material'

import FormSubscribe from '../FormSubscribe'

import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'


const useStyles = makeStyles(() => ({
	subscribe: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'flex-start',
	},
	socialList: {
		display: 'flex',
		flexDirection: 'row',
	},
}))

const Subscribe = () => {

	const {
		subscribe,
		socialList,
	} = useStyles()


	return (
		<Grid item xs={12} sm={3}>
			<List>
				<ListItem>
					<Typography
						variant="menuBold"
					>
									subscribe
					</Typography>
				</ListItem>
				<ListItem>
					<Typography variant='footerTextLight'>
								Subscribe now and get 15% off
								on your first order
					</Typography>
				</ListItem>
				<ListItem 
					className={subscribe}>
					<FormSubscribe />
				</ListItem>
				<ListItem>
					<Typography variant="menuBold">
								Follow us
					</Typography>
					<List 
						className={socialList}
						disablePadding={true}
					>
						<ListItem>
							<LinkMui
								href="https://facebook.com" 
								target="_blank"
							>
								<FacebookIcon />
							</LinkMui>
						</ListItem>
						<ListItem>
							<LinkMui
								href="https://twitter.com" 
								target="_blank"
							>
								<TwitterIcon />
							</LinkMui>
						</ListItem>
						<ListItem>
							<LinkMui
								href="https://instagram.com" 
								target="_blank"
							>
								<InstagramIcon />
							</LinkMui>
						</ListItem>
					</List>
				</ListItem>
			</List>
		</Grid>
	)
}

// Subscribe.propTypes = {
// 	styles: PropTypes.object.isRequired,
// }

export default Subscribe
