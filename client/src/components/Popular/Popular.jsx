import React from 'react'
import {Box, Button, Container, Typography} from '@mui/material'
import {makeStyles} from '@mui/styles'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'
import PopularList from './PopularList/PopularList'

const useStyles = makeStyles({
	sectionHeading : {
		textTransform: 'uppercase' ,
		letterSpacing : '5px',
		fontSize: '32px',
		color:'#373F41',
	},
	popularHeader:{
		textTransform: 'uppercase' ,
		letterSpacing : '10px',
		fontSize: '25px',
		color:'#373F41',
	},
	sectionButton : {
		background:'#FFFFFF',


	}
})

const Popular = () => {
	const classes = useStyles()
	return (
		<Container>
			<Typography fontSize={32} align={'center'} sx={{mb:'30px'}}
				variant={'h2'} className={classes.sectionHeading}>
                Popular
			</Typography>
			<PopularList/>
			{/*<Grid container spacing={2}>*/}
			{/*	<Grid item md={8} >*/}
			{/*		<Card sx={{maxWidth:'740px',border: 'none', boxShadow: 'none', borderRadius:'2px' }} >*/}
			{/*			<Box sx={{ position: 'relative' }}>*/}
			{/*				<CardMedia*/}
			{/*					height={'342px'}*/}
			{/*					component={'img'}*/}
			{/*					image={'https://media.istockphoto.com/photos/scandinavian-bedroom-interior-stock-photo-picture-id1248992411?b=1&k=20&m=1248992411&s=170667a&w=0&h=FZFNQYdQciSnfQYVEIvQA21PxRsoClU50T0cEoWK6oQ='}/>*/}
			{/*				<Box*/}
			{/*					sx={{*/}
			{/*						position: 'absolute',*/}
			{/*						bottom: 0,*/}
			{/*						left: 0,*/}
			{/*						width: '100%',*/}
			{/*						backgroundColor: 'rgba(255, 255, 255, 0.6);',*/}
			{/*						color: 'white',*/}
			{/*						padding: '10px',*/}

			{/*					}}>*/}
			{/*					<Box textAlign={'end'} sx={{mr:'45px', mb:'20px'}}>*/}
			{/*						<Typography fontSize={25} align={'right'} variant="h2" className={classes.popularHeader}*/}
			{/*							sx={{mt:'15px', mb:'15px'}}>BEDROOM</Typography>*/}
			{/*						<Button*/}
			{/*							color={'primary'}*/}
			{/*							sx={{p:'10px 42px'}}*/}
			{/*							variant={'outlined'}>Shop</Button>*/}
			{/*					</Box>*/}



			{/*				</Box>*/}
			{/*			</Box>*/}
			{/*		</Card>*/}
			{/*	</Grid>*/}
			{/*	<Grid item md={4}>*/}
			{/*		<Card sx={{maxWidth:'420px',border: 'none', boxShadow: 'none', borderRadius:'2px' }}>*/}
			{/*			<Box sx={{ position: 'relative' }}>*/}
			{/*				<CardMedia*/}
			{/*					height={'342px'}*/}
			{/*					component={'img'}*/}
			{/*					image={'https://media.istockphoto.com/photos/scandinavian-bedroom-interior-stock-photo-picture-id1248992411?b=1&k=20&m=1248992411&s=170667a&w=0&h=FZFNQYdQciSnfQYVEIvQA21PxRsoClU50T0cEoWK6oQ='}/>*/}
			{/*				<Box*/}
			{/*					sx={{*/}
			{/*						position: 'absolute',*/}
			{/*						bottom: 0,*/}
			{/*						left: 0,*/}
			{/*						height:'105px',*/}
			{/*						width: '100%',*/}
			{/*						backgroundColor: 'rgba(255, 255, 255, 0.6);',*/}
			{/*						color: 'white',*/}
			{/*						padding: '10px',*/}
			{/*					}}>*/}
			{/*					<Typography fontSize={25} align={'right'} variant="h2" className={classes.popularHeader}*/}
			{/*						sx={{mt:'15px', mr:'45px'}}>BEDROOM</Typography>*/}

			{/*				</Box>*/}
			{/*			</Box>*/}
			{/*		</Card>*/}
			{/*	</Grid>*/}
			{/*	<Grid item md={4}>*/}
			{/*		<Card sx={{maxWidth:'420px',border: 'none', boxShadow: 'none', borderRadius:'2px' }}>*/}
			{/*			<Box sx={{ position: 'relative' }}>*/}
			{/*				<CardMedia*/}
			{/*					height={'342px'}*/}
			{/*					component={'img'}*/}
			{/*					image={'https://media.istockphoto.com/photos/scandinavian-bedroom-interior-stock-photo-picture-id1248992411?b=1&k=20&m=1248992411&s=170667a&w=0&h=FZFNQYdQciSnfQYVEIvQA21PxRsoClU50T0cEoWK6oQ='}/>*/}
			{/*				<Box*/}
			{/*					sx={{*/}
			{/*						position: 'absolute',*/}
			{/*						bottom: 0,*/}
			{/*						left: 0,*/}
			{/*						height:'105px',*/}
			{/*						width: '100%',*/}
			{/*						backgroundColor: 'rgba(255, 255, 255, 0.6);',*/}
			{/*						color: 'white',*/}
			{/*						padding: '10px',*/}
			{/*					}}>*/}
			{/*					<Typography fontSize={25} align={'right'} variant="h2" className={classes.popularHeader}*/}
			{/*						sx={{mt:'15px', mr:'45px'}}>BEDROOM</Typography>*/}

			{/*				</Box>*/}
			{/*			</Box>*/}
			{/*		</Card>*/}
			{/*	</Grid>*/}
			{/*	<Grid item md={8}>*/}
			{/*		<Card sx={{maxWidth:'740px',border: 'none', boxShadow: 'none', borderRadius:'2px' }} >*/}
			{/*			<Box sx={{ position: 'relative' }}>*/}
			{/*				<CardMedia*/}
			{/*					height={'342px'}*/}
			{/*					component={'img'}*/}
			{/*					image={'https://media.istockphoto.com/photos/scandinavian-bedroom-interior-stock-photo-picture-id1248992411?b=1&k=20&m=1248992411&s=170667a&w=0&h=FZFNQYdQciSnfQYVEIvQA21PxRsoClU50T0cEoWK6oQ='}/>*/}
			{/*				<Box*/}
			{/*					sx={{*/}
			{/*						position: 'absolute',*/}
			{/*						bottom: 0,*/}
			{/*						left: 0,*/}
			{/*						height:'105px',*/}
			{/*						width: '100%',*/}
			{/*						backgroundColor: 'rgba(255, 255, 255, 0.6);',*/}
			{/*						color: 'white',*/}
			{/*						padding: '10px',*/}
			{/*					}}>*/}
			{/*					<Typography fontSize={25} align={'right'} variant="h2" className={classes.popularHeader}*/}
			{/*						sx={{mt:'15px', mr:'45px'}}>BEDROOM</Typography>*/}

			{/*				</Box>*/}
			{/*			</Box>*/}
			{/*		</Card>*/}
			{/*	</Grid>*/}
			{/*</Grid>*/}
			<Box mt={17} sx={{display:'flex' ,justifyContent: 'center', alignItems: 'center'}}>
				<Button
					color={'primary'}
					sx={{p:'17px 48px' , justifyContent: 'center', alignItems: 'center'}}
					variant='outlined' className={classes.sectionButton}
					endIcon={<ArrowForwardIosOutlinedIcon fontSize={'small'}/>}>See all
				</Button>
			</Box>

		</Container>
	)
}

export default Popular