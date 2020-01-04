var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
appuse(express.json());

// =========================DATA VARIABLES/OBJ HERE ======

// =====routes=====

// Create new reservations--takes in json input

// Star Server

app.listen(PORT, function(){
    console.log("App listening on PORT" + PORT);
});