import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute'
import Main from '../pages/Main/Main'
import ProductsList from '../pages/ProductsList/ProductsList'
import ProductDetails from '../pages/ProductDetails/ProductDetails'
import Catalog from '../pages/Catalog/Catalog'
import PaymentAndDelivery from '../staticPages/PaymentAndDelivery/PaymentAndDelivery'
import Returns from '../staticPages/Returns/Returns'
// import About from '../staticPages/About/About'
import PrivacyPolicy from '../staticPages/PrivacyPolicy/PrivacyPolicy'
import AboutUs from '../staticPages/AboutUs/AboutUs'
import Reviews from '../staticPages/Reviews/Reviews'
// import Blog from '../staticPages/Blog/Blog'
import Login from '../pages/Login/Login'
import Cart from '../pages/Cart/Cart'
// import Contact from '../staticPages/Contact/Contact'
import Page404 from '../pages/Page404/Page404'
import Favorites from '../pages/Favorites/Favorites'
import HandleSubscribe from '../pages/HandleSubscribe'


// get isLoggedIn from Redux

const AppRoutes = () => {

	return (
		<Switch>
			<Route exact path='/'><Main /></Route>
			{/* <Route exact path='/about'><About /></Route>  */}
			{/* <Route exact path='/contact'><Contact /></Route> */}
			<Route exact path='/login'><Login /></Route>
			<ProtectedRoute exact path='/favorites' isLoggedIn={false}>
				<Favorites />
			</ProtectedRoute>
			<Route exact path='/products-list'><ProductsList /></Route>
			<Route exact path='/product-details'><ProductDetails /></Route>
			<Route exact path='/cart'><Cart /></Route>
			<Route exact path='/shop/catalog'><Catalog /></Route>
			<Route exact path='/shop/payment-and-delivery'><PaymentAndDelivery /></Route>
			<Route exact path='/shop/returns'><Returns /></Route>
			<Route exact path='/shop/privacy-policy'><PrivacyPolicy /></Route>
			<Route exact path='/shop/terms-of-service'>terms-of-service</Route>
			<Route exact path='/about/about-us'><AboutUs /></Route>
			<Route exact path='/about/careers'><Reviews /></Route>
			{/* <Route exact path='/blog'><Blog /></Route> */}

			<Route exact path='/subscription/:email'><HandleSubscribe /></Route>

			<Route exact path='*'><Page404 /></Route>
		</Switch>
	)
}

export default AppRoutes