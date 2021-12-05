import React from 'react'
import {Box, Button, Container, Typography} from '@mui/material'
import {makeStyles} from '@mui/styles'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'
import PopularList from './PopularList/PopularList'
import { Link } from 'react-router-dom'


const useStyles = makeStyles( (theme) => ({

	sectionHeading : theme.typography.sectionHeading,

	buttonWrapper : {
		background:'#FFFFFF',
		display:'flex' ,
		justifyContent: 'center',
		alignItems: 'center' ,
		marginTop:'30px' ,
		marginBottom:'80px',

	},
}))

const Popular = () => {
	const classes = useStyles()

	return (
		<Container disableGutters sx={{mt:'80px' }}>
			<Typography fontSize={32}
				sx={{mb:'14px'}}
				variant={'h2'} className={classes.sectionHeading}>
				Popular
			</Typography>
			<PopularList/>
			<Box className={classes.buttonWrapper}>
				<Button
					color={'primary'}
					component={Link}
					to='/shop/catalog'
					sx={{p:'17px 48px',justifyContent: 'center',
						alignItems: 'center', ':hover': {
							backgroundColor: '#373F41',
							color: '#fff',
						}  }}
					variant='outlined'
					endIcon={<ArrowForwardIosOutlinedIcon fontSize={'small'}/>}>
					See all
				</Button>
			</Box>
		</Container>
	)
}

export default Popular