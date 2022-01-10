import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'
import theme from '../../utils/Theme'

const ScrollButton = () => {
	const [visible, setVisible] = useState(false)
	const buttonStyles = makeStyles({
		button: {
			position: 'fixed',
			left: '90%',
			bottom: '150px',
			padding: '0 6px',
			fontSize: '2.8rem',
			zIndex: 20,
			borderRadius: '50%',
			background: 'white',
			cursor: 'pointer',
			color:'#373F41',
			[theme.breakpoints.down('sm')]:{
				left: '85%'
			}
		}
	})
	const style = buttonStyles()

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop
		if (scrolled > 300){
			setVisible(true)
		}
		else if (scrolled <= 300){
			setVisible(false)
		}
	}

	const scrollToTop = () =>{
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	window.addEventListener('scroll', toggleVisible)

	return (
		<div	className={style.button}>
			<ArrowForwardIosRoundedIcon fontSize={'large'} onClick={scrollToTop} style={{display: visible ? 'inline' : 'none', transform: 'rotate(-90deg)'}} />
		</div>
	)
}

export default ScrollButton