import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import SearchIcon from './SearchIcon/SearchIcon'
import { StyledAutocomplete, StyledBox } from './styles'
import productsAPI from '../../../utils/API/productsAPI'
import { Grid, Avatar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const HeaderSearch = () => {
	const [options, setOptions] = useState([])

	const onSearch = async (e) => {
		if (e.target.value.trim().length === 0) {
			setOptions([])
			return
		}

		try {
			const res = await productsAPI.searchForProducts({ query: e.target.value })
			const data = await res.data

			if (data.length > 0) {
				setOptions(data)
			} else {
				setOptions([])
			}
		} catch (err) {
			// eslint-disable-next-line no-console
			console.error(err)
			setOptions([])
		}
	}

	return (
		<StyledBox>
			<StyledAutocomplete
				id="combo-box-demo"
				options={options}
				onKeyUp={onSearch}
				size='small'
				// noOptionsText='product not found'
				// loading={true}
				renderInput={(params) => <TextField {...params} label="Search..." variant="standard" />}
				getOptionLabel={(option) => option.name}
				renderOption={(props, option) => {
					return (
						<Link to={`/product-details/${option._id}`} {...props} style={{ textDecoration: 'none' }}>
							<Grid container wrap="nowrap" spacing={2}>
								<Grid item>
									<Avatar
										src={option.imageUrls[0]}
										alt={option.name}
										sx={{ width: 50, height: 50 }}
										variant='square'
									/>
								</Grid>
								<Grid item xs zeroMinWidth>
									<Typography
										variant='menuBold'
										sx={{ display: 'block' }}
									>
										{option.name}
									</Typography>
									<Typography
										variant='footerTextMedium'
										sx={{ display: 'block' }}
									>
										{'$' + option.currentPrice}
									</Typography>
								</Grid>
							</Grid>
						</Link>
					)
				}}
			/>
			<SearchIcon />
		</StyledBox>
	)
}

export default HeaderSearch