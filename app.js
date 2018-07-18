var express=require("express");
var app=express();

app.use(express.static(__dirname + "/public"));

// For handling cors issues 
app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization, x-auth');
    res.setHeader('Access-Control-Expose-Headers', 'x-auth');
    next();
});

// In browser go to localhost:3000
app.get('/',function(req,res){
	res.render("index.html");
})


app.listen(3000,function(){
    console.log("Server has started!!!");
})

//End of app.js