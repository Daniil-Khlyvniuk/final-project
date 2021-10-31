import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
// import MenuItem from '@mui/material/MenuItem'

// eslint-disable-next-line react/prop-types
const PositionedMenu = ({ group, children }) => {
	// eslint-disable-next-line react/prop-types
	const { name, id } = group
	// eslint-disable-next-line no-console
	console.log('PositionedMenu', group)
	const [anchorEl, setAnchorEl] = React.useState(null)
	const open = Boolean(anchorEl)

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	// eslint-disable-next-line react/prop-types
	// const listItems = children.map(children => {
	// 	return (
	// 		// eslint-disable-next-line react/prop-types
	// 		<MenuItem key={children.id} onClick={ handleClose }>
	// 			children.name
	// 		</MenuItem>
	// 	)
	// })

	return (
		<div>
			<Button
				id={ id }
				aria-controls="demo-positioned-menu"
				aria-haspopup="true"
				aria-expanded={ open ? 'true' : undefined }
				onClick={ handleClick }
			>
				{ name }
			</Button>
			<Menu
				id="demo-positioned-menu"
				aria-labelledby={ id }
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
			</Menu>
		</div>
	)
}
export default PositionedMenu