import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = ( {exeptions = [], children } ) => {
	let location = useLocation()
	useEffect( () => {
		if(!exeptions.find(except => except === location.pathname)){
			window.scrollTo(0, 0)
		}
	}, [ location ] )

	return children
}

export default ScrollToTop