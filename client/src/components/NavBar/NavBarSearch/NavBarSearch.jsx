import React from 'react'
import { styled } from '@mui/material/styles'
import { InputBase } from '@mui/material'
import SearchIcon from './SearchIcon/SearchIcon'

const Search = styled('div')(() => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	padding: 0,
	width: 380,
	borderBottom: '1px solid #373F41'
}))

const StyledInputBase = styled(InputBase)(() => ({
	width: 380,
}))

const HeaderSearch = () => {
	return (
		<Search>
			<StyledInputBase placeholder="Search" />
			<SearchIcon />
		</Search>
	)
}

export default HeaderSearch