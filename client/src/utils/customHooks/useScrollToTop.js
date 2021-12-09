import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const UseScrollToTop = ( {exeptions = [], children } ) => {
	let location = useLocation()
	useEffect( () => {
		if(!exeptions.find(except => except === location.pathname)){
			window.scrollTo(0, 0)
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ location ] )

	return children
}

export default UseScrollToTop