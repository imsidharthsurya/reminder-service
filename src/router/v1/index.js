const express=require("express");
const router=express.Router();
const TicketController=require("../../controllers/ticket-controller");

router.post("/ticket",TicketController.create);

module.exports=router