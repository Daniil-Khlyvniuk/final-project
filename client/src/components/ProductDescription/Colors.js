// eslint-disable-next-line no-unused-vars
import React , {useState} from 'react'
import CircleTwoToneIcon from '@mui/icons-material/CircleTwoTone'
import PropTypes from 'prop-types'
import {ToggleButton} from '@mui/material'
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles(theme => ({
	button: {
		margin: '1px',
		padding:'0',
		borderRadius: '50px'
	},

}))

const Colors = ({data}) => {

	const classes = useStyles()

	return <ToggleButton value={data.id} className={classes.button}
		sx={{height : '20px',
			borderColor:'black',
			borderRadius : '50px'}}>
		<CircleTwoToneIcon
			stroke={'black'} stroke-width={1}
			sx={{width: '20px', mr:'10px', color: data.cssValue}}/>
	</ToggleButton>

}

Colors.propTypes ={
	data : PropTypes.shape({
		cssValue : PropTypes.string,
		id : PropTypes.string
	})

}

export default Colors