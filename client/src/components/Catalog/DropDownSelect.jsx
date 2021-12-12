import React,{useState} from 'react'
import {Box, Menu, MenuItem, Button} from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { styled } from '@mui/material/styles'
import PropTypes from 'prop-types'

const StyledMenuItem = styled(MenuItem )(() => ({
	padding: '5px 10px 5px 40px',
	boxShadow: 'none'
}))

const DropDownSelect = ({
	arrayToIterate,
	selectedValue,
	selectHandler,
	label
}) => {
	const [anchor, setAnchor] = useState(null)
	const isOpened = Boolean(anchor)
	const getNameByValue = (value) => {
		const res = arrayToIterate.find(valueObj => valueObj.value == value)
		return (res && res.name) ? res.name : ''
	}
	const handleClick = (event) => {
		setAnchor(event.currentTarget)
	}
	const handleClose = () => {
		setAnchor(null)
	}
	const handleChange = (item) => {
		selectHandler(item)
		handleClose()
	}

	return (
		<Box>
			<Button
				id="select-page-button"
				aria-controls="select-page-menu"
				aria-haspopup="true"
				aria-expanded={isOpened ? 'true' : undefined}
				onClick={handleClick}
				endIcon={isOpened ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
			>
				{getNameByValue(selectedValue) ? getNameByValue(selectedValue) : label}
			</Button>
			<Menu
				id="select-page-menu"
				anchorEl={anchor}
				open={isOpened}
				value={selectedValue}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'select-page-button',
				}}
			>
				{arrayToIterate.map((item)=>
					<StyledMenuItem
						onClick={()=>{ handleChange(item.value) }}
						key={item._id} 
						value={item.value}
					>
						{item.name}
					</StyledMenuItem>)}
			</Menu>
		</Box>
	)
}

DropDownSelect.propTypes = {
	arrayToIterate: PropTypes.array,
	selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	selectHandler: PropTypes.func,
	label: PropTypes.string
}

export default DropDownSelect
