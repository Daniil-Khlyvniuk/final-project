import React from 'react'
import { NativeSelect } from '@mui/material'


const headSearch = {
	display: 'flex',
	justifyContent: 'space-between',
	margin: '50px auto',
	maxWidth: '880px',
	marginTop: '-40px',
	marginBottom: '-40px',
}

const HeadSearch = () => {
	return (
		<div style={headSearch}>
			<NativeSelect
				margin={'50px'}
				defaultValue={1}
				variant={'outlined'}
				inputProps={{
					name: 'count',
					id: 'uncontrolled-native',
				}}
			>
				<option value={1}>Show</option>
				<option value={18}>18</option>
				<option value={36}>36</option>
				<option>All</option>
			</NativeSelect>
			<NativeSelect
				margin={'50px'}
				defaultValue={18}
				inputProps={{
					name: 'Sort by',
					id: 'uncontrolled-native',
				}}
			>
				<option>Sort by</option>
				<option>Best Match</option>
				<option>Featured</option>
				<option>Lowest Price</option>
				<option>Highest Price</option>
			</NativeSelect>
		</div>
	)
}

export default HeadSearch