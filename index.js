var express = require ('express');
// set up express app

var app = express();

// this is heroku process.env.PORT or if running local will be on port 3000.
const PORT = process.env.PORT || 3000;

app.get('/',(req,res) =>{
    res.send("HOME PAGE");
})

const name = "Rob"
const phonenumber = "123-456-7890";
const email = "Joeisjoe@dennis.com";
const uniqueId ="Test ID";

app.get('/reservation', (req,res)=>{
    res.json({
        name: name,
        phonenumber: phonenumber,
        email: email,
        uniqueId: uniqueId,
    })
})

app.get('/waitlist', (req,res)=>{
    res.json({
        name: name,
        phonenumber: phonenumber,
        email: email,
        uniqueId: uniqueId,
    })
})


app.listen(PORT,function(){
    console.log("spun up server " + PORT);
})


