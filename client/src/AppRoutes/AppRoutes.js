/* eslint-disable max-len */
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute'
import Main from '../pages/Main/Main'
import ProductsList from '../pages/ProductsList/ProductsList'
import ProductDetails from '../pages/ProductDetails/ProductDetails'
import Catalog from '../pages/Catalog/Catalog'
// eslint-disable-next-line max-len
import PaymentAndDelivery from '../staticPages/PaymentAndDelivery/PaymentAndDelivery'
import Returns from '../staticPages/Returns/Returns'
import About from '../staticPages/About/About'
import PrivacyPolicy from '../staticPages/PrivacyPolicy/PrivacyPolicy'
import AboutUs from '../staticPages/AboutUs/AboutUs'
import Reviews from '../staticPages/Reviews/Reviews'
import Blog from '../staticPages/Blog/Blog'
import Login from '../pages/Login/Login'
import Cart from '../pages/Cart/Cart'
import Contact from '../staticPages/Contact/Contact'
import Error404 from '../pages/Error404/Error404'

// get isLoggedIn from Redux

const AppRoutes = () => {

	return (
		<Switch>
			<Route exact path='/'><Main /></Route>
			<Route exact path='/about'><About /></Route>
			<Route exact path='/contact'><Contact /></Route>
			<Route exact path='/login'><Login /></Route>
			<ProtectedRoute exact path='productslist' isLoggedIn={false}>
				<ProductsList />
			</ProtectedRoute>
			<ProtectedRoute exact path='productdetails' isLoggedIn={false}>
				<ProductDetails />
			</ProtectedRoute>
			<ProtectedRoute exact path='cart' isLoggedIn={false}>
				<Cart />
			</ProtectedRoute>
			<ProtectedRoute exact path='catalog' isLoggedIn={false}>
				<Catalog />
			</ProtectedRoute>
			<Route exact path='/paymentanddelivery'><PaymentAndDelivery /></Route>
			<ProtectedRoute exact path='returns' isLoggedIn={false}>
				<Returns />
			</ProtectedRoute>
			<Route exact path='/privacypolicy'><PrivacyPolicy /></Route>
			<Route exact path='/aboutus'><AboutUs /></Route>
			<Route exact path='/reviews'><Reviews /></Route>
			<Route exact path='/blog'><Blog /></Route>
			<Route exact path='*'><Error404 /></Route>
		</Switch>
		
	)
}

export default AppRoutes