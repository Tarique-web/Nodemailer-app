
module.exports = (router, nodemailer) => {


    router.post("/send", (req, res) => {
        let email_from = req.body.email
        let email_to = req.body.email_to
        let email_cc = req.body.email_cc
        let email_sub = req.body.email_sub
        let email_password = req.body.password
        let text_msg = req.body.email_message
        console.log(text_msg)

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: email_from,
                pass: "rizu@143"
            }
        });

        var mailOptions = {
            from: email_from,
            to: email_to,

            subject: email_sub,
            text: text_msg,
            cc: email_cc

        };

        transporter.sendMail(mailOptions, (error, sent) => {
            if (!error) {
                res.sendFile(__dirname + '/views/res.html');
                console.log('Email sent: ' + sent.response);


            }
            else {
                console.log(error)
                // console.log('Email sent: ' + sent.response);
            }
        });
    })
}