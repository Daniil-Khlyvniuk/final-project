import React from 'react'
import {Backdrop, CircularProgress} from '@mui/material'
import PropTypes from 'prop-types'

const BackdropLoader = ({open}) => {
	return (
		<Backdrop
			sx={{ color: 'white', zIndex: (theme) => theme.zIndex.drawer + 1 }}
			open={open}>
			<CircularProgress color="inherit" />
		</Backdrop>
	)
}
BackdropLoader.propTypes ={
	open : PropTypes.bool
}

export default BackdropLoader