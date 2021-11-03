import { createTheme } from '@mui/material/styles'

const theme = createTheme({
	breakpoints: {
		keys: ['xs', 'sm', 'md', 'lg', 'xl'],
		values: {
			xl: 1440,
			lg: 1180,
			md: 768,
			sm: 480,
			xs: 320,
		},
	},
	palette: {
		primary: { main: '#373F41' },
		secondary: { main: '#5C5E60' },
		error: { main: '#8C8C8C' },
		success: { main: '#388e3c' },
	},
	typography: {
		fontFamily: 'Mulish, sans-serif',
		fontSize: 16,
		h2: {
			fontFamily: 'Abel, sans-serif'
		},
		h3: {},
		h4: {},
		p: {
			fontFamily: 'Mulish, sans-serif',
		},
		menuBold: {
			textTransform: 'capitalize',
			color: '#373F41',
			fontFamily: 'Mulish, sans-serif',
			fontWeight: 700,
			fontSize: '16px',
			lineHeight: 'normal'
		},
		footerTextMedium: {
			textTransform: 'capitalize',
			color: '#373F41',
			fontFamily: 'Mulish, sans-serif',
			fontWeight: 400,
			fontSize: '16px',
			lineHeight: 'normal'
		},
		footerTextLight: {
			textTransform: 'capitalize',
			color: '#8A9394',
			fontFamily: 'Mulish, sans-serif',
			fontWeight: 200,
			fontSize: '14px',
			lineHeight: 'normal'
		},
	},
	components: {
		MuiButton: {
			variants: [
				{
					props: { variant: 'contained' },
					style: {
						backgroundColor: 'primary',
					}
				},
				{
					props: { variant: 'contained', asyncborderradius: 'on' },
					style: {
						backgroundColor: 'primary',
						borderTopLeftRadius: 0,
						borderBottomLeftRadius: 0,
					}
				}
			]
		},
		MuiTextField: {
			variants: [
				{
					props: { asyncborderradius: 'on' },
					style: {
						'& .MuiOutlinedInput-root':
						{
							borderTopRightRadius: 0,
							borderBottomRightRadius: 0,
						},
					}
				}
			]
		},
		MuiLink: {
			variants: [
				{
					props: { variant: 'bold' },
					style: {
						underline: 'none',
						textTransform: 'capitalize',
						textDecoration: 'none',
						color: '#373F41',
						fontFamily: 'Mulish',
						fontWeight: 700,
						fontSize: '16px',
						lineHeight: 'normal'
					}
				},
				{
					props: { variant: 'semiBold' },
					style: {
						underline: 'none',
						textTransform: 'capitalize',
						textDecoration: 'none',
						color: '#373F41',
						fontFamily: 'Mulish',
						fontWeight: 400,
						fontSize: '16px',
						lineHeight: 'normal'
					}
				},
				{
					props: { capitalize: 'on' },
					style: {
						textTransform: 'none',
					}
				}
			],
		}

	}
})
export default theme