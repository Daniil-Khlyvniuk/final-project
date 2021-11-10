import axios from 'axios'
import {subscribeTemlate, unSubscribeTemlate} from '../emailTemplates'

export const addSubscribe = (email) => axios.post('/api/subscribers',{
	email: email,
	letterSubject: 'Your subscription promo code',
	letterHtml: subscribeTemlate(email),
})

export const getSubscriptionByEmail = (email) => 
	axios.get(`/api/subscribers/${email}`)

export const changeSubscription = (obj) => axios.
	put(`/api/subscribers/email/${obj.email}`,{
		...obj,
		letterSubject: obj.enabled === true ? 'Subscription activation' : 'Subscription cancel',
		letterHtml: obj.enabled === true 
			? subscribeTemlate(obj.email) 
			: unSubscribeTemlate(obj.email),
	})
