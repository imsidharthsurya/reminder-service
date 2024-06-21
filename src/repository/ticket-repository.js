const {NotificationTicket}=require("../models/index")
const { Op } = require('sequelize');
class TicketRepository{

    async create(data){
        try{
            const response=await NotificationTicket.create(data);
            return response;
        }catch(err){
            console.log("error happenend at repository layer");
            throw err;
        }
    }
    async getAll(){
        try{
            const data=await NotificationTicket.findAll();
            return data;
        }catch(err){
            console.log("error happenend at repository layer");
            throw err;
        }
    }

    async get(filter){
        try{    
            const tickets=await NotificationTicket.findAll({
                where:{
                    status:filter.status,
                    notificationTime:{
                        [Op.lte]:new Date()
                    }

                }
            })
            return tickets;
        }catch(err){
            console.log("error happenend at repository layer");
            throw err;
        }
    }
    async update(ticketId,data){
        try{
            const ticket=await NotificationTicket.findByPk(ticketId);
            if(data.status){
                ticket.status=data.status;
            }
            await ticket.save();
            return ticket;
        }catch(err){
            console.log("error happenend at repository layer");
            throw err;
        }
    }
}

module.exports=TicketRepository