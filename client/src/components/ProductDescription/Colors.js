// eslint-disable-next-line no-unused-vars
import React from 'react'
import CircleIcon from '@mui/icons-material/Circle'
import PropTypes from 'prop-types'

const Colors = ({cssValue}) => {

	return <CircleIcon  sx={{width: '20px', mr:'10px',color: cssValue}}/>
}

Colors.propTypes ={
	cssValue : PropTypes.string,
}

export default Colors