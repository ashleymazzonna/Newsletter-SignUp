const express = require('./node_modules/express');
const bodyParser = require("./node_modules/body-parser");
const request = require("./node_modules/request");
// const config = require("./node_modules/config")

const app = express();
const keys = require('./.js/keys');

let api = keys.apiKey;

let audienceId = keys.audienceId;


app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")

});

app.post("/", function(req, res) {
    let first_name, last_name, Dob, email, userName, password;

    first_name = req.body.fname;
    last_name = req.body.lname; 
    email = req.body.email;

    var data = {
        members: [
            {
                email_address: email, 
                status: "subscribed"
            }
        ]
    };

    var jsonData = JSON.stringify(data);

    // dob = req.body.dob;
    // userName = req.body.username;
    // password = req.body.password;

    options = {
        url: "https://us4.api.mailchimp.com/3.0/lists/" + audienceId,
        method: "POST",
        headers: {
            "Authorization": "ashley " + api
        },
        body: jsonData
    };
    

    request(options, function(error, response, body) {
        if (error) {
            console.log(error);
        } else {
            console.log(response.statusCode);
        }

    });

    // console.log(`User first name: ${first_name}. User's email address: ${email}. User password: ${password}`);
});

app.listen(4000, function () {
    console.log("server is running on port 4000");
});





