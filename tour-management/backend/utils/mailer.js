import nodemailer from 'nodemailer';


 const sendEmail = (email) => {
    // console.log(email);
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ajaysonere472@gmail.com',
            pass: 'gxvacivsyysodtvy'
        }
    });

    var mailOptions = {
        from: 'ajaysonere472@gmail.com',
        to: email,
        subject: 'Thank You Registeration ',
        text: 'We are glad to hear from you'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

export default sendEmail;
