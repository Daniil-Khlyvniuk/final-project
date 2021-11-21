import React from 'react'
import {Box, Button, Card, CardMedia, Grid, Typography} from '@mui/material'
import {makeStyles} from '@mui/styles'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
	popularHeader:{
		textTransform: 'uppercase' ,
		letterSpacing : '10px',
		color:'#373F41',
	}
})

const PopularCard = ({data, index}) => {
	const classes = useStyles()
	if (index > 3) {
		return null
	} else {
		return (
			<Grid item md={index === 0 ? 8 : index === 3 ? 8 : 4} sm={12}>
				<Card sx={{border: 'none', boxShadow: 'none', borderRadius: '2px'}}>
					<Box sx={{position: 'relative'}}>
						<CardMedia
							height={'342px'}
							component={'img'}
							src={data.imgUrl}
						/>
						<Box
							sx={{
								position: 'absolute',
								bottom: 0,
								left: 0,
								width: '100%',
								backgroundColor: 'rgba(255, 255, 255, 0.6);',
								padding: '10px',
							}}>
							<Box textAlign={'end'} sx={{mr: '45px'}}>
								<Typography fontSize={25} align={'right'} variant="h2"
									sx={{mt: '15px', mb: '15px'}} className={classes.popularHeader}>
									{data.name}
								</Typography>
								<Button
									color={'primary'}
									component={Link}
									to={`/shop/catalog?category=${data.name}`}
									sx={{paddingY: '10px', paddingX: '40px', mb: '15px'}}
									variant={'outlined'}>
									Shop
								</Button>
							</Box>
						</Box>
					</Box>
				</Card>
			</Grid>
		)
	}
}

PopularCard.propTypes ={
	data : PropTypes.shape({
		name: PropTypes.string,
		imgUrl: PropTypes.string,
	}),
	index:PropTypes.number
}

export default PopularCard