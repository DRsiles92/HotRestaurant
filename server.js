var express = require("express");
var path = require("path");
var app = express();
var PORT = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

app.listen(PORT, function(){
    console.log("App listening on PORT" + PORT);
});

//variables for holding data - reserved tables and waitlist
var reservedTables = [
    {
        tableNumber: "",
        id: "",
        name: "",
        email: "",
        phone: "",
    }
];

var waitlist = [
    {
        tableNumber: "",
        id: "",
        name: "",
        email: "",
        phone: "",
    }
];
// Routes

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/main.html"));
  });

  // Basic route that sends the user first to the reservation Page

  app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "public/reservation.html"));
  });
  
  // Basic route that sends the user first to the waitlist Page

  app.get("/waitlist", function(req, res) {
    res.sendFile(path.join(__dirname, "public/waitlist.html"));
  });

// Basic route that sends the user first to the json of reserved tables Page

  app.get("/api/reservations", function(req, res) {
    return res.json(reservedTables);
  });

  // Basic route that sends the user first to the json of waitlist Page
  
  app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
  });


//creating new reserved tables
app.post("/api/tables", function(req, res) {
    var newTable = req.body;
    newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();

    console.log(newTable);
    var result;
    if (reservedTables.length >=5){
        result = "Waitlist";

    waitlist.push(newTable);}
    else{
        result = "Table Reserved";
        reservedTables.push(newTable);
    }
    res.json(result);
});

//adding names to waitlist
app.post("/api/waitlist", function(req, res) {
    var newWait = req.body;
    newWait.routeName = newWait.name.replace(/\s+/g, "").toLowerCase();

    console.log(newWait);
    waitlist.push(newWait);
    res.json(newWait);
})

