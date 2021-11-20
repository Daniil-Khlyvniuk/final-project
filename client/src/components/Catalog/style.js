import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'

export const StyledCatalogItem = styled(MenuItem)(() => ({
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
	['@media (max-width:750px)']: {
		gap: '0.5em',
	},
	['@media (max-width:450px)']: {
		padding: 6,
		gap: 0
	},
}))