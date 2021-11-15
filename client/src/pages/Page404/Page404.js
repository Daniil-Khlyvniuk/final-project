import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import {ThemeProvider, styled} from '@mui/material/styles'
import theme from '../../utils/Theme'
import { Link as RouterLink } from 'react-router-dom'


const StyledGrid = styled(Grid)(() => ({
	backgroundImage: 'url(https://telegra.ph/file/a833f6b2d325d08432a9e.jpg)',
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	paddingBottom: '0.67em',
	alignItems:'center',
	objectFit: 'cover',
}))


const styles = {
	padding: '72px 50px 0px 50px', textAlign: 'center',
}


const Error404 = () => {
	return (
		<StyledGrid
			container
			direction={'column'}
		>
			<Grid item>
				<Typography variant={'h1'}>
    404
				</Typography>
			</Grid>
			<Grid item>
				<Typography style={styles}  variant={'h2'}>
      Oops. Page not found
				</Typography>
			</Grid>
			<Grid item>
				<Typography style={styles} variant={'body1'}>
      You may have mistyped the
      address or the page may have moved.
				</Typography>
			</Grid>
			<Grid style={styles} item>
				<ThemeProvider theme={theme}>
					<Button
						to='/'
						component={RouterLink}
						color="primary"
						variant="outlined"
					>Home Page
					</Button>
				</ThemeProvider>
			</Grid>
		</StyledGrid>
	)
}

export default Error404