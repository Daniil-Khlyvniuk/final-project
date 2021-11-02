import React from 'react'
import SearchIcon from './SearchIcon/SearchIcon'
import { Search, StyledInputBase } from './styles'

const HeaderSearch = () => {
	return (
		<Search>
			<StyledInputBase placeholder="Search" />
			<SearchIcon />
		</Search>
	)
}

export default HeaderSearch