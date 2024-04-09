import {Request,Response} from "express"

import * as OrderService from "../services/order.service"


const findAll=async(req:Request,res:Response)=>{
    return  res.status(200).json(await OrderService.findAll());
}

const findOne=async(req:Request,res:Response)=>{
    return  res.status(200).json(await OrderService.findOne(req.params.id));
}


const create= async(req:any,res:Response)=>{
    const{order}= req.body;
    const {user}=req;
    order.Owner=user;
    req.body.Owner=user;
    return  res.status(201).json(await OrderService.create(order??req.body));
}

const update=async(req:Request,res:Response)=>{
    const{order}=req.body;
    return  res.status(201).json(await OrderService.update(req.params.id,order??req.body));
}

const remove=async(req:Request,res:Response)=>{
    return  res.status(204).json(await OrderService.remove(req.params.id));
}

export{findAll,findOne,create,update,remove}