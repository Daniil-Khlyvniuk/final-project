import React from 'react'
import Button from '@mui/material/Button'
import { Link as RouterLink } from 'react-router-dom'
import Grid from '@mui/material/Grid'


const headButton = {
	display: 'flex',
	justifyContent: 'space-between',
	margin: '50px auto',
	maxWidth: '880px',
}

const HeadSearch = () => {
	return (
		<Grid style={headButton} item xs={12}>
			<Button
				to='/'
				component={RouterLink}
				color="primary"
				variant="outlined"
			>SHOP ALL
			</Button>
			<Button
				to='/'
				component={RouterLink}
				color="primary"
				variant="outlined"
			>BEDROOM
			</Button>
			<Button
				to='/'
				component={RouterLink}
				color="primary"
				variant="outlined"
			>BED LINEN
			</Button>
			<Button
				to='/'
				component={RouterLink}
				color="primary"
				variant="outlined"
			>KITCHEN
			</Button>
			<Button
				to='/'
				component={RouterLink}
				color="primary"
				variant="outlined"
			>BATHROOM
			</Button>
			<Button
				to='/'
				component={RouterLink}
				color="primary"
				variant="outlined"
			>LOUNGEWEAR
			</Button>
			<Button
				to='/'
				component={RouterLink}
				color="primary"
				variant="outlined"
			>SALE
			</Button>
		</Grid>
	)
}

export default HeadSearch