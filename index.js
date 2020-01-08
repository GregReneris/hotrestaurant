var express = require ('express');
var path = require('path');
// set up express app

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// this is heroku process.env.PORT or if running local will be on port 3000.
const PORT = process.env.PORT || 3000;

app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname, "./index.html"));
})

const waitList = [
 {name: "Rob",
 phonenumber: "123-456-7890",
 email: "Joeisjoe@dennis.com",
 uniqueId: "Test ID"}
];

            // character will no work, need something else.
app.post("tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    
    var newtable = req.body;
    console.log(newtable);

    // We then add the json the user sent to the character array
    characters.push(newtable);
  
    // We then display the JSON to the users
    res.json(newtable);
  });
  
  


let tables = [
    
    {
        name : name,
        phonenumber : phonenumber,
        email : email,
        uniqueId : uniqueId,
    }

];

let waitlist = [
    
    {
        name : name,
        phonenumber : phonenumber,
        email : email,
        uniqueId : uniqueId,
    }

];



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


app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });
  

app.post("/waitlistArray", function(req, res) {
var newWaitList = req.body;

console.log(newWaitList);

waitList.push(newWaitList);

// We then display the JSON to the users
res.json(newWaitList);
console.log(waitList);

});
  
  
app.listen(PORT,function(){
    console.log("spun up server " + PORT);
})

