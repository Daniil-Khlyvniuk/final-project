import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'

export const StyledMenuItem = styled(MenuItem)(() => ({
	fontFamily: 'Mulish',
	fontWeight: 600,
	fontSize: '16px',
	cursor: 'pointer',
	color: '#373F41',
	alignSelf: 'center',
	position: 'relative',
	display: 'flex',
	justifyContent: 'space-between',
	gap: '1em',
}))