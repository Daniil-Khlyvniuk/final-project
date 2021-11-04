import React from 'react'
import {Box, Button, Card, CardMedia, Grid, Typography} from '@mui/material'
import PropTypes from 'prop-types'

const PopularCard = ({data}) => {
	return (
		<Grid item md={data.grid} >
			<Card sx={{maxWidth:'740px',border: 'none', boxShadow: 'none', borderRadius:'2px' }} >
				<Box sx={{ position: 'relative' }}>
					<CardMedia
						height={'342px'}
						component={'img'}
						image={data.image}/>
					<Box
						sx={{
							position: 'absolute',
							bottom: 0,
							left: 0,
							width: '100%',
							backgroundColor: 'rgba(255, 255, 255, 0.6);',
							color: 'white',
							padding: '10px',

						}}>
						<Box textAlign={'end'} sx={{mr:'45px', mb:'20px'}}>
							<Typography fontSize={25} align={'right'} variant="h2"
								sx={{mt:'15px', mb:'15px'}}>{data.title}</Typography>
							<Button
								color={'primary'}
								sx={{p:'10px 42px'}}
								variant={'outlined'}>Shop</Button>
						</Box>



					</Box>
				</Box>
			</Card>
		</Grid>
	)
}

PopularCard.propTypes ={
	data : PropTypes.shape({
		title: PropTypes.string,
		image: PropTypes.string,
		grid:PropTypes.number
	})
}

export default PopularCard