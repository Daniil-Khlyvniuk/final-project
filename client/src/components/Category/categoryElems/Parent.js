import React, { memo } from 'react'
import Button from '@mui/material/Button'
import { StyledMenu } from '../style'

// eslint-disable-next-line no-unused-vars,react/prop-types
const Parent = ({ children, text }) => {
	// eslint-disable-next-line react/prop-types
	// eslint-disable-next-line no-unused-vars
	const [anchorEl, setAnchorEl] = React.useState(null)
	const open = Boolean(anchorEl)

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<div>
			<Button
				id={ 'rootCategory' }
				aria-controls="category"
				aria-haspopup="true"
				aria-expanded={ open ? 'true' : undefined }
				onClick={ handleClick }
			>
				{ text }
			</Button>
			<StyledMenu
				id="category"
				aria-labelledby={ 'rootCategory' }
				anchorEl={ anchorEl }
				open={ open }
				onClose={ handleClose }
				anchorOrigin={ {
					vertical: 'top',
					horizontal: 'left',
				} }
				transformOrigin={ {
					vertical: 'top',
					horizontal: 'left',
				} }
			>
				{ children }
			</StyledMenu>
		</div>
	)
}

export default memo(Parent)

