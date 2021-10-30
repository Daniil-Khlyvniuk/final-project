import React from 'react'
import { Box, Grid, List, ListItem, Link, Typography } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'

import FormSubscribe from './FormSubscribe'

const Footer = () => {
	return (
		<Box>
			<Grid container columns={12} sx={{
				borderTop: '1px solid #373F41',
			}}>
				<Grid item xs={12} sm={3}>
					<List>
						<ListItem>
							<Link 
								href="/Shop" 
								underline="none"
							>
									shop
							</Link>
						</ListItem>
						<ListItem>
							<Link 
								href="/catalog"
								underline="none"
							>catalog</Link>
						</ListItem>
						<ListItem>
							<Link 
								href="/paymentAndDelivery" 
								underline="none"
							>
									payment & Delivery
							</Link>
						</ListItem>
						<ListItem>
							<Link 
								href="/returns" 
								underline="none"
							>returns</Link>
						</ListItem>
						<ListItem>
							<Link 
								href="/privacyAndPolicy"
								underline="none"
							>
									privacy Policy
							</Link>
						</ListItem>
						<ListItem>
							<Link 
								href="/termsOfService"
								underline="none"
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
								href="/about" 
								underline="none"
							>
									about
							</Link>
						</ListItem>
						<ListItem>
							<Link 
								href="/about_us" 
								underline="none"
							>
									about us
							</Link>
						</ListItem>
						<ListItem>
							<Link 
								href="/reviews" 
								underline="none"
							>
									reviews
							</Link>
						</ListItem>
						<ListItem>
							<Link 
								href="/blog" 
								underline="none"
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
								href="/contactUs" 
								underline="none"
							>
								contact us
							</Link>
						</ListItem>
						<ListItem>
							<Typography variant="subtitle1">
							Studio M, 4th Floor8 Lower 
								Manchester street, M1 5QF
							</Typography>
						</ListItem>
						<ListItem>
							<Link
								href="tel:+380938759922" 
								underline="none"
							>
								+38 093 875 9922
							</Link>
						</ListItem>
					</List>
				</Grid>
				<Grid item xs={12} sm={3}>
					<List>
						<ListItem>
							<Typography
								comonent={Link}
								variant={'subLink'}
							>
								{/* <Link
									href="/subscribe" 
									underline="none"
								>
								subscribe
								</Link> */}
							</Typography>
						</ListItem>
						<ListItem>
							<Typography variant="subtitle2">
								Subscribe now and get 15% off
								on your first order
							</Typography>
						</ListItem>
						<ListItem 
							sx={{
								flexDirection: 'row',
								flexWrap: 'wrap',
								justifyContent: 'flex-start',
							}}>
							<FormSubscribe />
						</ListItem>
						<ListItem>
							<Typography>
								Follow us
							</Typography>
							<List sx={{
								display: 'flex',
								flexDirection: 'row',
							}}
							disablePadding={true}
							>
								<ListItem>
									<Link
										href="https://facebook.com" 
										underline="none"
										target="_blank"
									>
										<FacebookIcon />
									</Link>
								</ListItem>
								<ListItem>
									<Link
										href="https://twitter.com" 
										underline="none"
										target="_blank"
									>
										<TwitterIcon />
									</Link>
								</ListItem>
								<ListItem>
									<Link
										href="https://instagram.com" 
										underline="none"
										target="_blank"
									>
										<InstagramIcon />
									</Link>
								</ListItem>
							</List>
						</ListItem>
					</List>
				</Grid>
			</Grid>
			<Grid container columns={12} sx={{
				borderTop: '1px solid #373F41',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				paddingTop: '25px',
				paddingBottom: '25px',
			}}>
				<Typography>
					<img src="./img/bottom_logo1.png" alt="Company" />
					<img src="./img/bottom_logo2.png" alt="Postil logo" />
				</Typography>
				<Typography>
				© 2010 — 2020  Simple Studio 
				</Typography>
			</Grid>
		</Box>
	)
}

export default Footer
