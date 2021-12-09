import { createTheme } from '@mui/material/styles'

const theme = createTheme({
	breakpoints: {
		keys: ['xs', 'sm', 'md', 'l', 'lg', 'xl'],
		values: {
			xl: 1440,
			lg: 1180,
			l: 850,
			md: 768,
			sm: 480,
			xs: 320,
		},
	},
	palette: {
		primary: { main: '#373F41' },
		secondary: { main: '#5C5E60' },
		white: { main: '#FFFFFF' },
		error: { main: '#8C8C8C' },
		success: { main: '#388e3c' },
		neutral: {
			main: '#fff',
			contrastText: '#fff',
		},
	},
	typography: {
		fontFamily: 'Mulish, sans-serif',
		fontSize: 16,
		h2: {
			fontFamily: 'Abel, sans-serif'
		},
		h3: {
			fontSize: '14px',
			'@media (max-width:760px)': {
				fontSize: '16px',
				margin:'6px 0px',
			},},
		h4: {},
		p: {
			fontFamily: 'Mulish, sans-serif',
		},
		menuBold: {
			textTransform: 'capitalize',
			color: 'primary.main',
			fontFamily: 'Mulish, sans-serif',
			fontWeight: 700,
			fontSize: '16px',
			lineHeight: 'normal'
		},
		footerTextMedium: {
			textTransform: 'capitalize',
			color: 'primary.main',
			fontFamily: 'Mulish, sans-serif',
			fontWeight: 400,
			fontSize: '16px',
			lineHeight: 'normal',
			['@media (max-width:390px)']: {
				paddingTop: '15px',
			}
		},
		footerTextLight: {
			textTransform: 'capitalize',
			color: '#8A9394',
			fontFamily: 'Mulish, sans-serif',
			fontWeight: 200,
			fontSize: '14px',
			lineHeight: 'normal'
		},
		sectionHeading : {
			textTransform: 'uppercase' ,
			letterSpacing : '5px',
			color:'primary',
			textAlign:'center'
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
				},
				{
					props: { variant: 'contained', direction: 'form' },
					style: {
						padding: '10px 89px',
						fontSize: '18px',
						fontFamily: 'Abel',
						fontWeight: '400',
					}
				},
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
		MuiTab:{
			variants: [
				{
					props: { variant: 'active'},
					style: {
						minWidth: 'calc(100% / 2)',
						border: '1px solid #373F41',
						borderBottom: 'none',
					}
				},
				{
					props: {variant: 'default'},
					style: {
						borderBottom: '1px solid #373F41',
						minWidth: 'calc(100% / 2)',
					}
				},
			]
		},

		MuiTabs:{
			variants: [
				{
					props: { variant: 'standard' },
					style: {
						'& span.MuiTabs-indicator': {
							display: 'none',
						},
					}
				},
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
						color: 'primary.main',
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
						color: 'primary.main',
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