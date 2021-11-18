import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

const ScrollButton = () => {
	const [visible, setVisible] = useState(false)
	const buttonStyles = makeStyles({
		button: {
			position: 'fixed',
			width: '100%',
			left: '92%',
			bottom: '150px',
			height: '20px',
			fontSize: '3rem',
			zIndex: 1,
			cursor: 'pointer',
			color: '#373F41'
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
			<ArrowUpwardIcon fontSize={'large'} onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} />
		</div>
	)
}

export default ScrollButton