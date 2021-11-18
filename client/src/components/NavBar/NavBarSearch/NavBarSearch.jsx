import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import SearchIcon from './SearchIcon/SearchIcon'
import { Search, SearchIconWrapper, StyledAutocomplete, StyledBox } from './styles'
import productsAPI from '../../../utils/API/productsAPI'
import { CircularProgress, Grid, Typography } from '@mui/material'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import setAllProducts from '../../../store/Products'

const HeaderSearch = () => {
	const [autocomplete, setAutocomplete] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const dispatch = useDispatch()
	let history = useHistory()
	let timer

	const onSearch = (e) => {
		clearTimeout(timer)
		setIsLoading(true)
		if (!e.target.value) return setIsLoading(false)

		timer = setTimeout(() => {
			if (e.target.value.trim().length === 0) {
				setAutocomplete([])
				return
			}
			try {
				productsAPI.searchAutocomplete(
					{ query: e.target.value }
				).then(({ data }) => {
					setIsLoading(false)
					if (data.length > 0) {
						setAutocomplete(data)
					}
				})
			} catch (err) {
				// eslint-disable-next-line no-console
				console.error(err)
				setAutocomplete([])
			}
		}, 700)
	}

	return (
		<StyledBox>
			<Search>
				<SearchIconWrapper>
					<SearchIcon />
				</SearchIconWrapper>
				<StyledAutocomplete
					disablePortal
					id="combo-box-demo"
					options={autocomplete}
					noOptionsText={'Search for products...'}
					loading={isLoading}
					clearOnBlur
					onKeyUp={onSearch}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							e.defaultMuiPrevented = true
							try {
								productsAPI.searchForProducts(
									{ query: e.target.value }
								).then(({ data }) => {
									if (data.length > 0) {
										dispatch(setAllProducts.setAllProducts(data))
										history.push('/shop/catalog')
									}
								})
							} catch (err) {
								// eslint-disable-next-line no-console
								console.error(err)
								dispatch(setAllProducts.setAllProducts([]))
							}
						}
					}}
					renderInput={(params) => <TextField
						{...params}
						label="Search..."
						variant="standard"
						InputProps={{
							...params.InputProps,
							endAdornment: (
								<React.Fragment>
									{isLoading ? <CircularProgress color="inherit" size={20} /> : null}
									{params.InputProps.endAdornment}
								</React.Fragment>
							),
						}}
					/>}
					size='small'
					getOptionLabel={(option) => option}
					renderOption={(props, option) => {
						return (
							<Grid item xs zeroMinWidth spacing={2} {...props}>
								<Typography
									variant='menuBold'
									sx={{ display: 'block' }}
									onClick={(e) => {
										try {
											productsAPI.searchForProducts(
												{ query: e.target.textContent }
											).then(({ data }) => {
												if (data.length > 0) {
													dispatch(setAllProducts.setAllProducts(data))
													history.push('/shop/catalog')
												}
											})
										} catch (err) {
											// eslint-disable-next-line no-console
											console.error(err)
											dispatch(setAllProducts.setAllProducts([]))
										}
									}}
								>
									{option}
								</Typography>
							</Grid>
						)
					}}
				>
				</StyledAutocomplete>
			</Search>
		</StyledBox>
	)
}

export default HeaderSearch