import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { useStyles } from './styles'

const Searchicon = () => {
	const classes = useStyles()

	return (
		<SearchIcon className={classes.navbarLink} />
	)
}

export default Searchicon