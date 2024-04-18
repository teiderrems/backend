import {Request,Response} from "express"

import * as PizzaService from "../services/pizza.service"


const findAll=async(req:any,res:Response)=>{
     
    try {
        return res.status(200).json(await PizzaService.findAll());
        
    } catch (error:any) {
        res.status(404).json({"message":error.message} );
        return;
    }
}

const findOne=async(req:Request,res:Response)=>{
    if (req.params){
        try {
            res.status(200).json(await PizzaService.findOne(req.params.id));
            return;

        } catch (error:any) {
            res.status(404).json({"message":error.message});
            return;

        }
    }
    return res.status(404).json({"message":"NotFound"});
}


const create= async(req:any,res:Response)=>{
    if (req.body && req.user){
        req.body.owner=req.user._id;
        try {
            res.status(201).json(await PizzaService.create(req.body));
            return;

        } catch (error:any) {
            res.status(404).json({"message":error.message});
            return;
        }
    }
    return res.status(404).json({"message":"NotFound"});
}

const update=async(req:Request,res:Response)=>{
    if (req.params && req.body){
        try {
            res.status(201).json(await PizzaService.update(req.params.id,req.body));
            return;

        } catch (error:any) {
            res.status(404).json({"message":error.message});
            return;
        }
    }
    return res.status(404).json({"message":"NotFound"});
}

const remove=async(req:Request,res:Response)=>{
    if (req.params){
        try {
            res.status(204).json(await PizzaService.remove(req.params.id));
            return;
        } catch (error:any) {
            res.status(404).json({"message":error.message});
            return;
        }
    }
    return res.status(404).json({"message":"NotFound"});
}

export{findAll,findOne,create,update,remove}