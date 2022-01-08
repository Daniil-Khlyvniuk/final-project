// const domain = 'http://localhost:3000/'
const domain = 'https://fp-postil-bedding.herokuapp.com/'
const promoCode = Math.round(Math.random() * 1000000)

export const subscribeTemlate = (email) => `<!DOCTYPE html>
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
                    background:
                     url(${domain}subscription/subscibe_email.jpg)
                      no-repeat center;
                    background-size: cover">
                        <div style="padding:25px 0;font-weight:300;">
                          <h2 style="margin-block-start: 1em;
                          margin-block-end: 1em;text-align: center;
                          background-color: rgba(255,255,255,.5);
                          padding-top: 10px;padding-bottom: 10px;
                          margin-bottom: 35px;">Thanks for join us!</h1>
                          <h3 style="margin-block-start: 1em;
                          margin-block-end: 1em; text-align: center;
                          margin-bottom: 30px;
                          background-color: rgba(255,255,255,.5);"
                          >You have subscribed to our news</h2>
                          <p style="margin-block-start: 1em;
                          margin-block-end: 1em;
                          padding-top: 10px;padding-bottom: 10px; 
                          text-align: center;
                          background-color: rgba(255,255,255,.5);"
                          >Fresh and exclusive offers are now coming your way, 
                          plus a heads up on our
                           <strong>latest arrivals</strong> 
                          and <strong>new collections</strong>
                           so you'll always have the <strong>best deal</strong>.
                           </p>
                  
                          <p style="background-color: rgba(255,255,255,.5); 
                          padding-top: 10px; padding-bottom: 10px; 
                          text-align: center;">We're giving you 
                          <strong>15% off</strong> your first order. 
                          Simply enter the code <strong>${promoCode}</strong> 
                          when checking out and the discount is yours!</p>
                          
                        </div>
                        <div style="text-align: center; margin-bottom: 20px;">
                          <p style="background-color: rgba(255,255,255,.5);
                          padding-top: 10px; padding-bottom: 10px;
                          text-align: center; margin-bottom: 30px;">
                            If you want to unsubscribe go to  
                          </p>
                          <a style="text-transform: uppercase; 
                          text-decoration: none; color: blue; 
                          border: 1px solid #373F41; border-radius: 4px;
                          background-color: #373F41; color: #fff;
                          padding: 14px 40px;"
                          href="${domain}subscription/${email}"
                          target="_blank">page</a>
                        </div>
                       
                    </div>
                  
                </td>
            </tr>
        </tbody>
    </table>
</div>
</body>
</html>`

export const unSubscribeTemlate = (email) => `<!DOCTYPE html>
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
                    background:
                     url(${domain}subscription/subscibe_email.jpg)
                      no-repeat center;
                    background-size: cover">
                        <div style="padding:25px 0;font-weight:300;">
                          <h2 style="margin-block-start: 1em;
                          margin-block-end: 1em;text-align: center;
                          background-color: rgb(255 255 255 / 49%);
                          padding-top: 10px;padding-bottom: 10px;
                          margin-bottom: 35px;">Good Luck!</h1>
                          <h3 style="margin-block-start: 1em;
                          margin-block-end: 1em; text-align: center;
                          background-color: rgb(255 255 255 / 49%);
                          margin-bottom: 30px;
                          background-color: rgba(255,255,255,.5);"
                          >You have unsubscribed from our news</h2>
                          
                        </div>
                        <div style="text-align: center; margin-bottom: 20px;">
                          <p style="background-color: rgba(255,255,255,.5);
                          padding-top: 10px; padding-bottom: 10px;
                          text-align: center; margin-bottom: 30px;">
                            If you want to resubscribe go to  
                          </p>
                          <a style="text-transform: uppercase; 
                          text-decoration: none; color: blue; 
                          border: 1px solid #373F41; border-radius: 4px;
                          background-color: #373F41; color: #fff;
                          padding: 14px 40px;"
                          href="${domain}subscription/${email}"
                          target="_blank">page</a>
                        </div>
                       
                    </div>
                  
                </td>
            </tr>
        </tbody>
    </table>
</div>
</body>
</html>`