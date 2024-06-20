const express=require("express");
const {PORT}=require("./config/serverConfig")

const app=express();

const setupAndStartServer=async()=>{
    app.listen(PORT,()=>{
        console.log(`server is running on port: ${PORT}`)
    })
}

setupAndStartServer();