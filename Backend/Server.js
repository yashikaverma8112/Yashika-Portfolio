
const express = require('express');
require('dotenv').config();
const TRANSPOTER_PASSWORD = process.env.TRANSPOTER_PASSWORD;
const nodemailer = require('nodemailer');
const app = express();
const cors = require('cors')
app.use(cors())

app.use(express.json());

 
app.post('/contact',(req,res)=>{
 
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'engryashikaverma@gmail.com',
          pass: TRANSPOTER_PASSWORD
        }
    });
 
    var mailOptions = {
        from: req.body.to,// sender address
        to: 'engryashikaverma@gmail.com', // list of receivers
        name:req.body.name,
        number: req.body.number, 
        subject:"Contact Form",
        text:req.body.description,
        html: `
        <div style="padding:10px; border-style: ridge">
        <p>You have a new contact request.</p>
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.to}</li>
            <li>Contact Number: ${req.body.number}</li>
            <li>Message: ${req.body.description}</li>
        </ul>
        </div>
        `
    };
     
    transporter.sendMail(mailOptions, function(error, info){
        if (error)
        {
          res.json({status: true, respMesg: 'ERROR!'})
        } 
        else
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        }
     
      });
});
 
// listen to the port
app.listen(3000, () => {
    console.log('server start on port 3000');
  });