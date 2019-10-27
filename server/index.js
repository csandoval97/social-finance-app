const fs = require('fs');
const request = require('request')

var options = {
    uri:'https://sandbox.api.yodlee.com/ysl/accounts',
    method: 'GET',
    headers:{
        Authorization: ' Bearer ',
        'Content-Type':'application/json',
        'Api-Version':'1.1'
    }
    
}

var jwt = require('jsonwebtoken');
var privateKey = fs.readFileSync("./devSandbox.key","utf8");  //Location of the file with your private key
var payload = {};
var currentTime =  Math.floor(Date.now() / 1000);
var signOptions = {
	algorithm: "RS512"  //Yodlee requires RS512 algorithm when encoding JWT
};

payload.iss = "0098bef0-b0c7819c-bee9-4766-be1e-92a8a5392f16"; // The issuer id from the API Dashboard
payload.iat = currentTime;  //Epoch time when token is issued in seconds
payload.exp = currentTime + 1800;  //Epoch time when token is set to expire. Must be 1800 seconds 
payload.sub = "sbMemRjYGPkpBNaIwx1";


var token = jwt.sign(payload, privateKey, signOptions);
options.headers.Authorization += token;  

// https.get(options.headers.Authorization+token, (res)=>{
//     console.log(res);
// });
console.log("Printing token: "+ token);
console.log("Option: "+ JSON.stringify(options) );

request(options, (err, res, body)=>{
    console.log(err);
    console.log(res);
})