const transporter=require("../config/emailConfig")
const TicketRepository=require("../repository/ticket-repository")

const repo=new TicketRepository();

const sendBasicMail=(mailFrom,mailTo,mailSubject,mailBody)=>{
    transporter.sendMail({
        from:mailFrom,
        to:mailTo,
        subject:mailSubject,
        text:mailBody
    })
}

const createNotification=async(data)=>{
    try{
        const response=await repo.create(data);
        return response
    }catch(err){
        console.log("error happened at service layer");
        throw err;
    }
}

const fetchPendingEmails=async()=>{
    try{
        const tickets=await repo.get({status:"PENDING"});
        return tickets;
    }catch(err){
        console.log("error happened at service layer");
        throw err;
    }
}
module.exports={
    sendBasicMail,
    createNotification,
    fetchPendingEmails
}