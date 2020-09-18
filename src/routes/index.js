const { Router } = require('express')
const nodemailer = require('nodemailer')
const router = Router()


router.post('/send', async (req,res) => {
    const { name,email,subject,message } = req.body
    
    if (!name || !email || !subject || !message) {
        res.send({success:false, message: 'Complete all fields'})
    }
    
    const emailHTML =  `
        <h1>New email</h1>
        <ul>
            <li>Name : ${name}</li>
            <li>E-mail : ${email}</li>
            <li>subject : ${subject}</li>
            <li>Message : ${message}</li>
        </ul>
        
    `

    let transporter = nodemailer.createTransport({
        host: "host",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'user', // generated ethereal user
          pass: 'pass', // generated ethereal password
        }
    })

    let info = await transporter.sendMail({
        from: '"" <me@example.com>', // sender address
        to: "me@email.com", // list of receivers
        subject: "New Message", // Subject line
        html: emailHTML
    });

    res.send({success:true, message: 'E-mail send succesfull'})
    // res.redirect('/another route')


})

module.exports = router