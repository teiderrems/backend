import {Request,Response} from "express"

import * as OrderService from "../services/order.service"


const findAll=async(req:Request,res:Response)=>{
    return  res.status(200).json(await OrderService.findAll());
}

const findOne=async(req:Request,res:Response)=>{
    if (req.params){
        return  res.status(200).json(await OrderService.findOne(req.params.id));
    }
}


const create= async(req:any,res:Response)=>{
    if (req.user && req.body){
        req.body.owner=req.user._id;
        return  res.status(201).json(await OrderService.create(req.body));
    }
    return res.status(401).send({message:"UnAuthorize"});
}

const update=async(req:Request,res:Response)=>{
    if (req.body && req.params){
        return  res.status(201).json(await OrderService.update(req.params.id,req.body));
    }
    return res.status(404).send({message:"NotFound"});
}

const remove=async(req:Request,res:Response)=>{
    if (req.params){
        return  res.status(204).json(await OrderService.remove(req.params.id));
    }
    return res.status(404).send({message:"NotFound"});
}

export{findAll,findOne,create,update,remove}