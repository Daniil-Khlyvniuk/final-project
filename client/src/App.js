import React, { useEffect } from 'react'
import Header from './components/NavBar/NavBar'
import Footer from './components/Footer'
import AppRoutes from './routes/AppRoutes'
import { useSelector, useDispatch } from 'react-redux'
import { modalSelectors } from './store/modal'
import useAuth from './utils/customHooks/useAuth'
import ScrollButton from './components/ScrollButton/ScrollButton'
// import RootSnackBar from './components/UI/RootSnackBar' //удалить потом 
import { settingsOperations } from './store/settings'
import UseScrollToTop from './utils/customHooks/useScrollToTop'
import { userSelectors } from './store/user'
import { favoritesOperations } from './store/favorites'

const App = () => {
	const { checkToken } = useAuth()
	const dispatch = useDispatch()
	const modal = useSelector(modalSelectors.checkOpen())
	const token = useSelector(userSelectors.getToken())

	useEffect(() => {
		checkToken()
	}, [checkToken])

	useEffect(() => {
		dispatch(settingsOperations.fetchSettings())
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		if (!token) return
		favoritesOperations.fetchFavoritesIds()(dispatch)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [token])

	const exeptionScroll = ['/shop/catalog', '/search']

	return (
		<div className={'App'}>
			<Header />
			<UseScrollToTop exeptions={exeptionScroll} >
				<AppRoutes />
			</UseScrollToTop>
			<Footer />
			{/* <RootSnackBar /> */}
			<ScrollButton />
			{modal}
		</div>
	)
}

export default App