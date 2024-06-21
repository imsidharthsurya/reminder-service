const express=require("express");
const {PORT}=require("./config/serverConfig")

const job=require("./utils/job")
const apiRouter=require("./router/index")

const setupAndStartServer=async()=>{

    const app=express();
    app.use(express.json())

    app.use("/api",apiRouter)
    app.listen(PORT,()=>{
        job();
        //will fetch pending emails & send mail to those after every 2 minutes
        console.log(`server is running on port: ${PORT}`)
    })
}

setupAndStartServer();