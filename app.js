//jshint esversion:6

const express = require('./node_modules/express');
const bodyParser = require("./node_modules/body-parser");

const app = express();


app.get("/", function (req, res) {


});

app.listen(3000, function () {
    console.log("server is running on port 4000");
});

//Get API key from MailChimp


