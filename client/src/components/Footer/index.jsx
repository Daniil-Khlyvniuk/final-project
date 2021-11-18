import React, {useEffect} from 'react'
import { makeStyles } from '@mui/styles'
import { Box, Container, Grid } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import {linksSelectors, linksOperations} from '../../store/Links'
import ContactUs from './ContactUs'
import Subscribe from './Subscribe'
import Credentials from './Credentials'

import PageLinks from './PageLinks'

const useStyles = makeStyles(() => ({
	blockStyle: {
		padding: '80px 0 40px',
	},
}))

const Footer = () => {
	const { blockStyle } = useStyles()

	const dispatch = useDispatch()
	const allLinks = useSelector(linksSelectors.getLinks())

	useEffect(() => {
		dispatch(linksOperations.fetchLinks())
	}, [dispatch])

	return (
		<Box 
			sx={{ 
				borderColor: '#373F41', 
				borderTop: 1, 
				maxWidth: 1310, 
				margin: '0 auto'
			}}
		>
			<Container maxWidth="lg">
				<Grid container columns={12} 
					className={blockStyle}
				>
					{
						allLinks.length > 0 && 
						allLinks.map(
							links => <PageLinks key={links._id} linksArr={links} />)
					}
					<ContactUs />
					<Subscribe />
				</Grid>
			</Container>
			<Credentials />
		</Box>
	)
}

export default Footer
