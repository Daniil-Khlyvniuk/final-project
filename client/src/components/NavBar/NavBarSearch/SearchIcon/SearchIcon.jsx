import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { IconButton } from '@mui/material'
import { useStyles } from './styles'

const Searchicon = () => {
	const classes = useStyles()

	return (
		<IconButton aria-label="search" sx={{ padding: 0 }}>
			<SearchIcon className={classes.navbarLink} />
		</IconButton>
	)
}

export default Searchicon