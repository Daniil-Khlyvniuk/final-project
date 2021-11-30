import React from 'react'
import { Container, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { productsSelectors } from '../../store/Products'
import { Box } from '@mui/system'
import BackdropLoader from '../../components/UI/BackdropLoader/BackdropLoader'
import { Redirect, useLocation } from 'react-router-dom'
import Card from '../../components/ProductCard/ProductCard'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		gap: '20px',
		maxWidth: '1180px',
		margin: '0 auto',
		justifyContent: 'space-between'
	},
	title: theme.typography.sectionHeading,
}))

const Search = () => {
	const products = useSelector(productsSelectors.getProducts())
	const isLoading = useSelector(productsSelectors.getIsLoading())
	const classes = useStyles()
	let location = useLocation()

	return (
		<Container maxWidth="lg" sx={{ minWidth: 320 }}>
			{isLoading && <BackdropLoader open={isLoading} />}
			{!products.length
				? <Redirect to='/' />
				: <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
					<Typography
						fontSize={32}
						sx={{ mb: '14px', mt: '85px' }}
						variant='h2'
					>
						{`Search results for "${location.search.substr(location.search.lastIndexOf('=')+1)}"`}
					</Typography>
				</Box>
			}
			<div className={classes.container}>
				{
					!!products?.length
					&&
					products.map(item => (
						<Card
							key={item._id}
							_id={item.variants._id}
							image={'/' + item.variants.imageUrls[0]}
							title={item?.name || ''}
							price={item.variants.currentPrice} />
					))
				}
			</div>
		</Container>
	)
}

export default Search