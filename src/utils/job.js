const {fetchPendingEmails,updateTicket}=require("../services/email-service")
const cron = require('node-cron');

const transporter=require("../config/emailConfig")

const job=async()=>{
    cron.schedule('*/2 * * * *', async() => {
        // console.log("2 minutes are up fetching pending mails and sending mail")
        const pendingEmails=await fetchPendingEmails();
        pendingEmails.forEach((email)=>{
            // sendBasicMail("imsidharthsurya@gmail.com",email.recepientEmail,email.subject,email.content);
            transporter.sendMail({
                from:"imsidharthsurya@gmail.com",
                to:email.recepientEmail,
                subject:email.subject,
                text:email.content
            },(err,info)=>{
                if(err){
                    console.log("error happened while sending mail ",err);
                }else{
                    updateTicket(email.id,{status:"SUCCESS"})
                }
            })
        })
        console.log(pendingEmails)
      });
}

module.exports=job;