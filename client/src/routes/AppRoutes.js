import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute'
import Main from '../pages/Main/Main'
import ProductsList from '../pages/ProductsList/ProductsList'
import ProductDetails from '../pages/ProductDetails/ProductDetails'
import Catalog from '../pages/Catalog/Catalog'
import PaymentAndDelivery from '../staticPages/PaymentAndDelivery/PaymentAndDelivery'
import Returns from '../staticPages/Returns/Returns'
import PrivacyPolicy from '../staticPages/PrivacyPolicy/PrivacyPolicy'
import TermsOfService from '../staticPages/TermsOfService/TermsOfService'
import AboutUs from '../staticPages/AboutUs/AboutUs'
import Careers from '../staticPages/Careers/Careers'
import ContactUs from '../staticPages/ContactUs/ContactUs'
import Cart from '../pages/Cart/Cart'
import Page404 from '../pages/Page404/Page404'
import Favorites from '../pages/Favorites/Favorites'
import HandleSubscribe from '../pages/HandleSubscribe'

const AppRoutes = () => {
	return (
		<Switch>
			<Route exact path='/'><Main /></Route>
			<ProtectedRoute exact path='/favorites'><Favorites /></ProtectedRoute>
			<Route exact path='/products-list'><ProductsList /></Route>
			<Route exact path='/product-details/:id'><ProductDetails /></Route>
			<Route exact path='/cart'><Cart /></Route>
			<Route exact path='/api/products/*'><Catalog /></Route>
			<Route exact path='/shop/payment-and-delivery'><PaymentAndDelivery /></Route>
			<Route exact path='/shop/returns'><Returns /></Route>
			<Route exact path='/shop/privacy-policy'><PrivacyPolicy /></Route>
			<Route exact path='/shop/terms-of-service'><TermsOfService /></Route>
			<Route exact path='/about/about-us'><AboutUs /></Route>
			<Route exact path='/about/careers'><Careers /></Route>
			<Route exact path='/about/contact-us'><ContactUs /></Route>
			<Route exact path='/subscription/:email'><HandleSubscribe /></Route>
			<Route exact path='*'><Page404 /></Route>
		</Switch>
	)
}

export default AppRoutes