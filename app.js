//jshint esversion:6
// 7b3b90bd62849b80421c1cbfc807ff48-us4 mailchimp api key

const express = require('./node_modules/express');
const bodyParser = require("./node_modules/body-parser");
const request = require("./node_modules/request");

const app = express();
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")

});

app.post("/", function(req, res) {
    let first_name, last_name, Dob, email, password;

    first_name = req.body.fname;
    email = req.body.email;
    password = req.body.password;

    console.log(`User first name: ${first_name}. User's email address: ${email}. User password: ${password}`);
});


app.listen(4000, function () {
    console.log("server is running on port 4000");
});





