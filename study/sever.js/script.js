 const exp = require('constants');
var express = require('express')
var bodyParser = require('body-parser')

 var app = express()
 var server = app.listen(5500, listening)


 function listening(){
    console.log('"listing ...');
    
 }
 app.use(bodyParser.json())
 app.use(express.static('website'))

//  app.get("/flower",sendFlower)
 app.get("/search",sendFlower)

 app.post("/post", postHandler)

 app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


 var data ={
     "fruit": "Apple",
     "size": "Large",
     "color": "Red"
 }
 function sendFlower(request, response){
    response.set({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    });
    response.send(data)
 }

 function postHandler(request, response) {
    console.log(request.body.test);
    data.test = request.body.test
    
 }