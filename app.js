require('dotenv').config();

const nodemailer = require('nodemailer');
// const hbs = require('nodemailer-express-handlebars')

//Step 1

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

//Step 2

let mailOptions = {
    from: 'shourayagoyal2406@gmail.com',
    to: 'sgoyal_be19@thapar.edu, shourayagoyal2406@gmail.com',
    // cc: ''
    // bcc: ''
    subject: 'Testing and Testing',
    text: 'IT works'
};

//Step 3

transporter.sendMail(mailOptions)
    .then(function(response) {
        console.log('Email Sent !!');
    })
    .catch(function(error) {
        console.log('Error: ' error);
    });
