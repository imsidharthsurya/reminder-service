const express=require("express");
const {PORT}=require("./config/serverConfig")
const {createChannel,subscribeMessage}=require("./utils/messageQueue")
const {REMINDER_BINDING_KEY}=require("./config/serverConfig")
const job=require("./utils/job")
const apiRouter=require("./router/index")

const {subscribeEvents}=require("./services/email-service")

const setupAndStartServer=async()=>{

    const app=express();
    app.use(express.json())

    app.use("/api",apiRouter)

    const channel=await createChannel();
    subscribeMessage(channel,subscribeEvents,REMINDER_BINDING_KEY)
    app.listen(PORT,()=>{
        // job();
        //will fetch pending emails & send mail to those after every 2 minutes
        console.log(`server is running on port: ${PORT}`)
    })
}

setupAndStartServer();