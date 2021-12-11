import React from 'react'
import { Alert, Snackbar } from '@mui/material'
import PropTypes from 'prop-types'

const SnackbarMess = ({ open, message, variant }) => {

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

SnackbarMess.propTypes = {
	open: PropTypes.bool,
	message: PropTypes.string,
	variant: PropTypes.object
}

export default SnackbarMess