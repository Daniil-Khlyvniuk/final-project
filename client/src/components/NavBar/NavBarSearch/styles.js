import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'
import Autocomplete from '@mui/material/Autocomplete'

export const StyledBox = styled(Box)(() => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	['@media (max-width:684px)']: {
		order: 1,
	},
}))

export const StyledAutocomplete = styled(Autocomplete)(() => ({
	width: 380,
	['@media (max-width:900px)']: {
		width: 250
	},
	['@media (max-width:684px)']: {
		width: '90vw',
		padding: '10px 0'
	},
	['@media (max-width:425px)']: {
		width: '88vw',
	},
	position: 'relative',
	'& .css-y2vtlc-MuiFormLabel-root-MuiInputLabel-root, .css-t6p8nw': {
		fontWeight: 600,
		fontSize: '16px',
		color: '#373F41',
		left: 30
	},
	'& .MuiAutocomplete-inputRoot': {
		paddingLeft: 30
	}
}))

export const Search = styled('div')(() => ({
	position: 'relative',
}))

export const SearchIconWrapper = styled('div')(() => ({
	height: '100%',
	position: 'absolute',
	top: 5,
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}))
