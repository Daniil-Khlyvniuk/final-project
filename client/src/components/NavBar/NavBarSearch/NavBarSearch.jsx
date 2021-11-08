import * as React from 'react'
import TextField from '@mui/material/TextField'
import SearchIcon from './SearchIcon/SearchIcon'
import { StyledAutocomplete, StyledBox } from './styles'
import { useSelector } from 'react-redux'
import { productsSelectors } from '../../../store/Products'

const HeaderSearch = () => {
	const getProducts = useSelector(productsSelectors.getProducts())
	const productsNames = getProducts.map(product => product.name)

	return (
		<StyledBox>
			<StyledAutocomplete
				disablePortal
				id="combo-box-demo"
				options={productsNames}
				size='small'
				renderInput={(params) => <TextField {...params} label="Search..." variant="standard" />}
			/>
			<SearchIcon />
		</StyledBox>
	)
}

export default HeaderSearch