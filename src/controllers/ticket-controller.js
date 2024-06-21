const {createNotification}=require("../services/email-service");

const create=async(req,res)=>{
    try{
        const response=await createNotification(req.body);
        return res.status(201).json({
            data:response,
            success:true,
            message:"successfully registered email reminder",
            err:{}
        })
    }catch(err){
        return res.status(500).json({
            data:{},
            success:false,
            message:"unable to register an email reminder",
            err:err
        })
    }
}

module.exports={
    create
}