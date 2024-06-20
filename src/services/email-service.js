const transporter=require("../config/emailConfig")

const sendBasicMail=(mailFrom,mailTo,mailSubject,mailBody)=>{
    transporter.sendMail({
        from:mailFrom,
        to:mailTo,
        subject:mailSubject,
        text:mailBody
    })
}

module.exports={
    sendBasicMail
}