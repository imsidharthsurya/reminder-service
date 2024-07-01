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

const updateTicket=async(ticketId,data)=>{
    try{
        const response=await repo.update(ticketId,data);
        return response;
    }catch(err){
        console.log("error happened at service layer");
        throw err;
    }
}

const subscribeEvents=async(payload)=>{
    const service=payload.service;
    const data=payload.data;
    switch(service){
        case 'CREATE_TICKET':
            await createNotification(data);
            break;
        case 'SEND_BASIC_MAIL':
            await sendBasicMail(data);
            break;
        default:
            console.log("No valid event received");
            break;
    }
}
module.exports={
    sendBasicMail,
    createNotification,
    fetchPendingEmails,
    updateTicket,
    subscribeEvents
}