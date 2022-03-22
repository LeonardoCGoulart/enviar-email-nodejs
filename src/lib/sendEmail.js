const { addEmailToArray } = require('../lib/csvFunctions');
const nodemailer = require('nodemailer');
const listaEmail = addEmailToArray();
const textoHTML = "Olá, treinador.<br>Acesse já o <a href='http://SITE.COM'>site</a>."
                    

let transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: true,
    service: "Outlook365",
    auth:{
        user: "YOUR_EMAIL@outlook.com",
        pass: "YOUR_PASS"
    }
})

transporter.sendMail({
    from: "YOUR NAME <email@outlook.com>",
    to: listaEmail,
    subject: "YOUR SUBJECT!",
    text: "text",
    html: textoHTML
}).then(message => {
    console.log(message);
}).catch(err => {
    console.log(err);
})