const express=require("express");
const {PORT}=require("./config/serverConfig")

const {sendBasicMail}=require("./services/email-service")

const setupAndStartServer=async()=>{

    const app=express();
    app.use(express.json())

    app.listen(PORT,()=>{
        sendBasicMail('imsk@sid.com','imkavitamishra007@gmail.com','Testing mail send','it is working fine this is body of the mail.')
        console.log(`server is running on port: ${PORT}`)
    })
}

setupAndStartServer();