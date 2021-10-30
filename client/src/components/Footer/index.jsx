import React from 'react'
import { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom'
import { Box, Grid, List, ListItem, Typography,
	Link as LinkMui } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'

import FormSubscribe from './FormSubscribe'

const useStyles = makeStyles(() => ({
	blockStyle: {
		borderTop: '1px solid #373F41',
		padding: '80px 60px 40px',
	},
	subBlockStyle: {
		borderTop: '1px solid #373F41',
		padding: '25px 60px 20px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	boldText: {
		textTransform: 'capitalize',
		textDecoration: 'none',
		color: '#373F41',
		fontFamily: 'Mulish',
		fontWeight: 700,
		fontSize: '16px',
		lineHeight: 'normal'
	},
	notBoldText: {
		textTransform: 'capitalize',
		textDecoration: 'none',
		color: '#373F41',
		fontFamily: 'Mulish',
		fontWeight: 400,
		fontSize: '16px',
		lineHeight: 'normal'
	},
	outerLink: {
		color: '#373F41',
		fontFamily: 'Mulish',
		fontWeight: 400,
		fontSize: '16px',
		lineHeight: 'normal'
	},

	subscribe: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'flex-start',
	},
	socialList: {
		display: 'flex',
		flexDirection: 'row',
	},
	logoBottom: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	logoBottomLeft: {
		marginRight: 10
	}
}))

const Footer = () => {

	const {
		blockStyle,
		subBlockStyle,
		boldText,
		notBoldText,
		outerLink,
		subscribe,
		socialList,
		logoBottom,
		logoBottomLeft
	} = useStyles()

	return (
		<Box>
			<Grid container columns={12} 
				className={blockStyle}
			>
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
								to="/about_us"
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
				<Grid item xs={12} sm={3}>
					<List>
						<ListItem>
							<Link
								to="/contactUs" 
								className={boldText}
							>
								contact us
							</Link>
						</ListItem>
						<ListItem>
							<LinkMui
								href="tel:380938759922"
								target="_blank"
								className={outerLink}
								underline='none'
							>
									hello@gmail.com
							</LinkMui>
						
						</ListItem>
						<ListItem>
							<Typography 
								variant='footerTextMedium'
							>
							Studio M, 4th Floor8 Lower 
								Manchester street, M1 5QF
							</Typography>
						</ListItem>
						<ListItem>
							<LinkMui
								href="tel:380938759922"
								target="_blank"
								className={outerLink}
								underline={'none'}
							>
								+38 093 875 9922
							</LinkMui>
						</ListItem>
					</List>
				</Grid>
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
			</Grid>
			<Grid container columns={12}
				className={subBlockStyle}
			>
				<Typography className={logoBottom}>
					<img 
						className={logoBottomLeft} 
						src="./img/bottom_logo1.png" alt="Company" />
					<img src="./img/bottom_logo2.png" alt="Postil logo" />
				</Typography>
				<Typography variant='footerTextMedium'>
					© 2010 — 2020  Simple Studio 
				</Typography>
				<Typography></Typography>
			</Grid>
		</Box>
	)
}

export default Footer
