const {fetchPendingEmails,sendBasicMail}=require("../services/email-service")
const cron = require('node-cron');


const job=async()=>{
    cron.schedule('*/2 * * * *', async() => {
        console.log("2 minutes are up fetching pending mails and sending mail")
        const pendingEmails=await fetchPendingEmails();
        pendingEmails.map((email)=>{
            console.log("email recepient is: ",email.recepientEmail)
            sendBasicMail("imsidharthsurya@gmail.com",email.recepientEmail,email.subject,email.content);
        })
        // console.log("pending email are: ",pendingEmails)
      });
}

module.exports=job;