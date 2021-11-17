import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import Button from '@mui/material/Button'
import {FaArrowCircleUp} from 'react-icons/fa'

const ScrollButton = () => {
	const [visible, setVisible] = useState(false)

	// eslint-disable-next-line no-undef
	const Button = styled.div`
   position: fixed; 
   width: 100%;
   left: 50%;
   bottom: 40px;
   height: 20px;
   font-size: 3rem;
   z-index: 1;
   cursor: pointer;
   color: green;
	`
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
		<Button>
			<FaArrowCircleUp onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} />
		</Button>
	)
}

export default ScrollButton