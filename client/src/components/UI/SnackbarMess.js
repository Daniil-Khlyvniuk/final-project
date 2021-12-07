import React from 'react'
import {Alert, Snackbar} from '@mui/material'

// eslint-disable-next-line react/prop-types
const SnackbarMess = ({open, message , variant}) => {

	const [openSnack, setOpen] = React.useState(open)



	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return
		}

		setOpen(false)
	}

	return (
		<Snackbar open={openSnack} autoHideDuration={6000} onClose={handleClose}>
			<Alert onClose={handleClose} severity={variant} sx={{ width: '100%' }}>
				{message}
			</Alert>
		</Snackbar>
	)
}

export default SnackbarMess