import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute'
import Main from '../pages/Main/Main'
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
import UserProfilePage from '../pages/UserProfile/UserProfile'
import Search from '../pages/Search/Search'
import Checkout from '../pages/Cart/checkout'
import CompletePay from '../components/PayCard/CompletePay'

const AppRoutes = () => {
	return (
		<Switch>
			<Route exact path='/'><Main /></Route>
			<ProtectedRoute exact path='/favorites'><Favorites /></ProtectedRoute>
			<Route exact path='/product-details/:id'><ProductDetails /></Route>
			<Route exact path='/cart'><Cart /></Route>
			<Route exact path='/shop/catalog'><Catalog /></Route>
			<Route exact path='/search'><Search /></Route>
			<Route exact path='/shop/payment-and-delivery'><PaymentAndDelivery /></Route>
			<Route exact path='/shop/returns'><Returns /></Route>
			<Route exact path='/shop/privacy-policy'><PrivacyPolicy /></Route>
			<Route exact path='/shop/terms-of-service'><TermsOfService /></Route>
			<Route exact path='/about/about-us'><AboutUs /></Route>
			<Route exact path='/about/careers'><Careers /></Route>
			<Route exact path='/about/contact-us'><ContactUs /></Route>
			<Route exact path='/subscription/:email'><HandleSubscribe /></Route>
			<ProtectedRoute exact path='/checkout'><Checkout/></ProtectedRoute>
			<ProtectedRoute exact path='/user-profile'><UserProfilePage/></ProtectedRoute>
			{/*<ProtectedRoute exact path='/complete-order'><CompletePay /></ProtectedRoute>*/}
			<Route exact path='/complete-order'><CompletePay /></Route>
			<Route exact path='*'><Page404 /></Route>
		</Switch>
	)
}

export default AppRoutes
