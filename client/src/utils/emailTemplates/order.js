import useHandleShoppingBag from '../customHooks/useHandleShoppingBag'
// const domain = 'http://localhost:3000/'
const domain = 'https://fp-postil-bedding.herokuapp.com/'


const SubscribeTemlate = () =>{
	const { shoppingBag, totalPrice } = useHandleShoppingBag()
	console.log(shoppingBag[0])
	const goods = shoppingBag.map((elem)=>{ return (`
<p>${elem?.title}</p>
<p>${elem.product.color}</p>
<img src="domain/${elem.product.imageUrls[0]}">
<p>${elem.product.currentPrice}.00$</p>
<p>${elem.product.amount}</p>
`)})

	return (`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Message</title>
</head>
<body>
  <div style="font-size:16px;color:#2f2936;padding:0;
  font-family:Arial,sans-serif;width:100%;font-weight:300;
  margin:0;background-color:#f5f5f5;word-break:break-word">
    <table style="border-radius:4px;font-size:16px;color:#2f2936;
    border-collapse:separate;border-spacing:0;max-width:700px;
    font-family:'Lato','Helvetica Neue',helvetica,sans-serif;
    border:1px solid #c7d0d4;padding:0;width:100%;font-weight:300;
    margin:15px auto;background-color:#fff">
        <tbody>
            <tr style="font-weight:300">
         	       <td style="padding:0;font-weight:300;margin:0;
                text-align:center">
                    <div style="padding:25px 0;font-size:14px;
                    font-weight:300;border-bottom:1px solid #dee7eb">
                        <div style="max-width: 620px;font-weight:300;
                        margin:0 auto;text-align:left;">
                            <a target="_blank" href="${domain}">
                              <img src="${domain}logo/header-logo.png">
                            </a>
                        </div>
                    </div>
                </td>
            </tr>
            <tr style="font-weight:300">
                <td style="padding:0;font-weight:300;
                margin:0;text-align:center">
                    <div style="padding:20px;max-width:610px;font-weight:300;
                    margin:0 auto;text-align:center;
                    background-size: cover">
                        <div style="padding:25px 0;font-weight:300;">
                          <h2 style="margin-block-start: 1em;
                          margin-block-end: 1em;text-align: center;
                          background-color: rgb(255 255 255 / 49%);
                          padding-top: 10px;padding-bottom: 10px;
                          margin-bottom: 35px;">Thanks for you order</h1>
                          <h3 style="margin-block-start: 1em;
                          margin-block-end: 1em; text-align: center;
                          background-color: rgb(255 255 255 / 49%);
                          margin-bottom: 30px;"
                          >You have made a wonderful choice</h2>
                          <p style="margin-block-start: 1em;
                          margin-block-end: 1em;
                          background-color: rgb(255 255 255 / 49%);
                          padding-top: 10px;padding-bottom: 10px; 
                          text-align: center;"
                          >Congratulations on your purchase, 
                          within<strong>2-3</strong> 
                           days your item will be under your
                            door!                     
                           always yours <strong>Postil shop</strong>.
                           </p>                                    
                          <p style="background-color: rgb(255 255 255 / 49%); 
                          padding-top: 10px; padding-bottom: 10px; 
                          text-align: center;">We are already 
                          happy to collect the 
                          <strong>following products for you:</strong>
                          </p>    
                          <div>${goods}</div>    
                                                                           
                        </div>
                        <p style="background-color: rgb(255 255 255 / 49%); 
                          padding-top: 10px; padding-bottom: 10px; 
                          text-align: center;">
                          Amount of your purchases:
													</p>         
													<div>
													<div style="text-align: center; margin-bottom: 20px;">
                          <p style="background-color: rgb(255 255 255 / 49%);
                          padding-top: 10px; padding-bottom: 10px;
                          text-align: center; margin-bottom: 30px;">
                           TOTAL: ${totalPrice}.00$
                          </p>                   
													</div>
													<div style="text-align: center; margin-bottom: 20px;">
													 <p style="background-color: rgb(255 255 255 / 49%);
                          padding-top: 10px; padding-bottom: 10px;
                          text-align: center; margin-bottom: 30px;">
                            Your purchase history will appear in your Account
                          </p>
												<p style="background-color: rgb(255 255 255 / 49%);
                          padding-top: 10px; padding-bottom: 10px;
                          text-align: center; margin-bottom: 30px;">
                          if you have any questions 
                          contact us!</p>  
                          <p style="background-color: rgb(255 255 255 / 49%);
                          padding-top: 10px; padding-bottom: 10px;
                          text-align: center; margin-bottom: 30px;">
                            Go to my Account
                          </p>
                          <a style="text-transform: uppercase; 
                          text-decoration: none; color: blue; 
                          border: 1px solid #373F41; border-radius: 4px;
                          background-color: #373F41; color: #fff;
                          padding: 14px 40px;"
                          href="${domain}purchase"
                          target="_blank">page</a>
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</body>
</html>`)}
export default SubscribeTemlate