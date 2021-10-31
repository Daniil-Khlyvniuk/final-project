import { styled } from '@mui/material/styles'
import { InputBase } from '@mui/material'

export const Search = styled('div')(() => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	padding: 0,
	width: 380,
	borderBottom: '1px solid #373F41'
}))

export const StyledInputBase = styled(InputBase)(() => ({
	width: 380,
	fontFamily: 'Mulish',
	fontWeight: 600,
	fontSize: '16px',
	color: '#373F41',
}))