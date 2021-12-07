import React, { useEffect } from 'react'
import Header from './components/NavBar/NavBar'
import Footer from './components/Footer'
import AppRoutes from './routes/AppRoutes'
import { useSelector, useDispatch } from 'react-redux'
import { modalSelectors } from './store/Modal'
import useAuth from './utils/customHooks/useAuth'
import ScrollButton from './components/ScrollButton/ScrollButton'
import { settingsOperations } from './store/Settings'

// import UseScrollToTop from './utils/customHooks/useScrollToTop'

const App = () => {
	const { checkToken } = useAuth()
	const dispatch = useDispatch()
	const modal = useSelector(modalSelectors.checkOpen())

	useEffect(() => {
		checkToken()
	}, [checkToken])

	useEffect(() => {
		dispatch(settingsOperations.fetchSettings())
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className={'App'}>
			<Header />
			{/* <UseScrollToTop /> */}
			<AppRoutes />
			<Footer />
			<ScrollButton />
			{modal}
		</div>
	)
}

export default App