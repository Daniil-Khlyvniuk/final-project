import axios from 'axios'

//sent message template
const addSubscriber = (email) => axios.post('/subscribers',  {
	email: email,
	letterSubject: 'Your subscription',
	letterHtml: '<!DOCTYPE html><html lang=\'en\'> <head> <meta charset=\'UTF-8\' /> <meta name=\'viewport\' content=\'width=device-width, initial-scale=1.0\' /> <meta http-equiv=\'X-UA-Compatible\' content=\'ie=edge\' /> <title>Document</title> <style> td { padding: 20px 50px; background-color: yellow; color: blueviolet; font-size: 20px; } </style> </head> <body> <table> <tr> <td>Test1</td> <td>Test2</td> <td>Test3</td> </tr> <tr> <td>Test1.1</td> <td>Test2.1</td> <td>Test3.1</td> </tr> </table> </body></html>'
})

export default {addSubscriber}