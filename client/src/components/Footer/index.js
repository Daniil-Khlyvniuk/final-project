import React, { useEffect } from 'react'
import { makeStyles } from '@mui/styles'
import { Box, Container, Grid, Typography } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { linksSelectors, linksOperations } from '../../store/links'
import Subscribe from './Subscribe'
import Credentials from './Credentials'
import Loader from '../UI/Loader/Loader'
import PageLinks from './PageLinks'

const useStyles = makeStyles(() => ({
	blockStyle: {
		padding: '80px 0 40px',
	},
}))

const Footer = () => {
	const { blockStyle } = useStyles()

	const dispatch = useDispatch()
	const { data, error, isLoading } = useSelector(linksSelectors.getData())

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
			<Container maxWidth="lg" sx={{ minWidth: 320 }}>
				<Grid container columns={12}
					className={blockStyle}>
					{isLoading && (<Loader />)}
					{error && (<Typography sx={{ color: 'red' }}>{error}</Typography>)}
					{
						data.length > 0 &&
						data.map(
							links => <PageLinks key={links._id} linksArr={links} />)
					}
					<Subscribe />
				</Grid>
			</Container>
			<Credentials />
		</Box>
	)
}

export default Footer
