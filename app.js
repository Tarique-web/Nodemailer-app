const express = require ("express")
const body = require("body-parser");
const app = express();
const router = express.Router()
const nodemailer = require('nodemailer');


app.use(express.static(__dirname + '/views'));

app.use(body.urlencoded({ extended: true}));
app.set('view engine', 'ejs')


app.get("/", (req, res) =>{
    res.sendFile(__dirname + '/views/email.html');
    
})

app.use('/',router);
require('./send_email')(router,nodemailer);

port = 5555
app.listen(port,()=>{
    console.log(`server is working ${port}`);
})