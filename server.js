var express = require("express");
var path = require("path");
var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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


//creating new reserved tables
app.post("/tables", function(req, res) {
    var newTable = req.body;
    newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();

    console.log(newTable);
    reservedTables.push(newTable);
    res.json(newTable);
});

//adding names to waitlist
app.post("/api/waitlist", function(req, res) {
    var newWait = req.body;
    newWait.routeName = newWait.name.replace(/\s+/g, "").toLowerCase();

    console.log(newWait);
    waitlist.push(newWait);
    res.json(newWait);
})

