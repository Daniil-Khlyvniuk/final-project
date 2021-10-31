import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { IconButton } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
	navbarLink: {
		color: '#373F41',
	}
}))

const Searchicon = () => {
	const { navbarLink } = useStyles()

	return (
		<IconButton aria-label="search" sx={{ padding: 0 }}>
			<SearchIcon className={navbarLink} />
		</IconButton>
	)
}

export default Searchicon