const fs = require('fs');
const request = require('request');
const express = require('express');

var app = express();
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

request(options, (err, res, body)=>{
    console.log(err);
    console.log(res);
})


app.get('/', (req, res)=>{
    res.send({'status':'ok'} )
})

app.get('/home/saving', (req, res) => {
    res.send({
        name:['bank-of-america','tcf-bank','bmo-harris','JP-Morgan'],
        value:[100,200,215,10]
    })
})
app.get('/home/credit', (req, res) => {
    res.send({
        name:['food','gas','travel','home-repair','self-care','home-supply','fast-food'],
        value:[10,30,40,100,10,50,300]
    })
})
app.get('/home/loan',(req, res) => {
    res.send({
        name:['home','vehicle','insurance','education'],
        value:[1000,2000,500,80000]
    })
})
app.listen(3000, function(){
    console.log("Server on port 3000")
})
