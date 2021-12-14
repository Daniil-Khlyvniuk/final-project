import React from	'react'
import axios from 'axios'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYWY3NTEzNzRmNjc0NzdiODg3ZTY4NiIsImZpcnN0TmFtZSI6IlZlcnl0c2tpIiwibGFzdE5hbWUiOiJWZXJ5dHNraSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2Mzk0MTc4MDIsImV4cCI6MTYzOTQ1MzgwMn0.oKJmR_aHCf7bD6xP-b5npPWmBheXuLJhV58oxnTi2YU'

const mockGetSubscriptionByEmail = async email=> {
	const url = `/api/subscribers/${email}`
	return await axios.get(url, token)
}

const mockAddSubscriber = async email => {
	return await axios.post('/api/subscribers', email, token)
}

describe('testing subscription', () => {
	it('should get subscriber user', async () => {
		jest.spyOn(axios, 'get').mockReturnValue({
			"enabled": true,
			"_id": "5db076446feb753064b28f85",
			"email": "saribeg@gmail.com",
			"date": "2019-10-23T15:48:20.676Z",
			"__v": 0
		})
		await expect(mockGetSubscriptionByEmail('5db076446feb753064b28f85')).resolves.toMatchObject({})

	})

	it('should add new subscriber', async () => {
		const newSubscriber = {
			email: "saribeg@gmail.com",
			letterSubject: "Test letter (final project)"
		};
		jest.spyOn(axios, 'post').mockReturnValue({
			"subscriber": {
				"enabled": true,
				"_id": "5db076446feb753064b28f85",
				"email": "saribeg@gmail.com",
				"date": "2019-10-23T15:48:20.676Z",
				"__v": 0
			},
			"mailResult": {
				"accepted": ["saribeg@gmail.com"],
				"rejected": [],
				"envelopeTime": 837,
				"messageTime": 846,
				"messageSize": 819,
				"response": "250 2.0.0 OK  1571845701 c26sm10885665ljj.45 - gsmtp",
				"envelope": {
					"from": "2019.matter.store@gmail.com",
					"to": ["saribeg@gmail.com"]
				},
				"messageId": "<1b406c27-3875-077a-2781-4a1c1507a09b@gmail.com>"
			}
		})
		await expect(mockAddSubscriber(newSubscriber)).resolves.toMatchObject({})

	})

	it('bad GET response', async () => {
		axios.get.mockImplementation(() => Promise.reject({}))
	})
})