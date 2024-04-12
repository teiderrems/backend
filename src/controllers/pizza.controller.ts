import {Request,Response} from "express"

import * as PizzaService from "../services/pizza.service"


const findAll=async(req:any,res:Response)=>{
     
    try {
        return res.status(200).json(await PizzaService.findAll());
        
    } catch (error:any) {
        return res.status(404).send(error.message );
       
    }
}

const findOne=async(req:Request,res:Response)=>{
    try {
        return res.status(200).json(await PizzaService.findOne(req.params.id));
    
    } catch (error:any) {
        return res.status(404).json({"message":error.message});
       
    }
}


const create= async(req:Request,res:Response)=>{
    const{pizza}= req.body;
    try {
        return res.status(201).json(await PizzaService.create(pizza??req.body));
        
    } catch (error:any) {
        return res.status(404).json({"message":error.message});
      
    }
}

const update=async(req:Request,res:Response)=>{
    const{pizza}=req.body;
    try {
        return res.status(201).json(await PizzaService.update(req.params.id,pizza??req.body));
        
    } catch (error:any) {
        return res.status(404).json({"message":error.message});
    }
}

const remove=async(req:Request,res:Response)=>{
    try {
        return res.status(204).json(await PizzaService.remove(req.params.id));
    } catch (error:any) {
        return res.status(404).json({"message":error.message});
    }
}

export{findAll,findOne,create,update,remove}