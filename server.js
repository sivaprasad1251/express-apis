var express = require('express');
var app = express();

app.use(express.json());

app.post("/login", (req,res)=>{

   let body = req.body;

   if(!body.username){
      res.status(400).send("eneter valid username");

   } else if(!body.password){
      res.status(400).send("enter password");

   }else{

      if(body.username===body.password){
         res.status(200).send('login success')
      }else{
         res.status(400).send('login failure')
      }

   }
});

app.post('/post-example', function(req, res){
   console.log("req.body", req.body);
   res.send("welcome " + JSON.stringify(req.body) );
})

app.get('/example-query-params', function(req, res){
    console.log("/ /example-query-params", req.query);
    res.send("response from example query params" + JSON.stringify(req.query));
})

 

app.post('/welcome/:name/:branch', function(req, res){
    console.log("params", req.prarams);
    res.send("welcome " + req.params.name + " " +req.params.branch);
})

  app.use('/', function (req, res) {
    console.log("/ hai api")
    res.send('Hello Worldsession2');
 })

 app.use('/hai', function (req, res) {
    console.log("/ welcome api");
    res.send('welcome to api hai');
 })

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})