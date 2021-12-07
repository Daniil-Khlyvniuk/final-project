import {useEffect} from 'react'

const UseScrollToTop = () => {
	return (
		useEffect(() => {
			window.scrollTo(0, 0)
		}, [])
	)
}

export default UseScrollToTop