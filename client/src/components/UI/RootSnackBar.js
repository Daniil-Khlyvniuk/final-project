import React from 'react'
import {Snackbar, Alert as MuiAlert} from '@mui/material'
import {useSelector, useDispatch} from 'react-redux'
import {snackBarSelectors, snackBarOperations} from '../../store/SnackBar'

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const RootSnackBar = () => {
	const dispatch = useDispatch()
	const {
		message, 
		severity,
	} = useSelector(snackBarSelectors.getData())

	const handleClose = () => {
		dispatch(snackBarOperations.snackToggle(null))
	}

	const snackProps = {
		severity: severity ? severity : 'info',
		autoHideDuration: 6000,
		horizontal: 'left',
		vertical: 'bottom',
	}

	return (
		<Snackbar 
			open={!!message} 
			onClose={handleClose}
			{...snackProps}
		>
			<Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
				{message}
			</Alert>
		</Snackbar>
	)
}


export default RootSnackBar
