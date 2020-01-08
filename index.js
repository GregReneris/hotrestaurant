var express = require ('express');
// set up express app

var app = express();

// this is heroku process.env.PORT or if running local will be on port 3000.
const PORT = process.env.PORT || 3000;

app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname, "index.html"));
})

const name = "Rob"
const phonenumber = "123-456-7890";
const email = "Joeisjoe@dennis.com";
const uniqueId ="Test ID";

app.get('/reservationArray', (req,res)=>{
    res.json({
        name: name,
        phonenumber: phonenumber,
        email: email,
        uniqueId: uniqueId,
    })
})

app.get('/waitlistArray', (req,res)=>{
    res.json({
        name: name,
        phonenumber: phonenumber,
        email: email,
        uniqueId: uniqueId,
    })
})










app.get("/form", function(req, res) {
    // res.send("Welcome to the form page!")
    res.sendFile(path.join(__dirname, "form.html"));
  });


app.listen(PORT,function(){
    console.log("spun up server " + PORT);
})

