import {Request,Response} from "express"

import * as ClientService from "../services/client.service"


const findAll=async(req:Request,res:Response)=>{
    return  res.status(200).json(await ClientService.findAll());
}

const findOne=async(req:Request,res:Response)=>{
    
    return  res.status(200).json(await ClientService.findOne(req.params.id));
}


const create= async(req:Request,res:Response)=>{
    const{client}= req.body;
    return  res.status(201).json(await ClientService.create(client??req.body));
}

const update=async(req:Request,res:Response)=>{
    const{client}=req.body;
    return  res.status(201).json(await ClientService.update(req.params.id,client??req.body));
}

const remove=async(req:Request,res:Response)=>{
    
    return  res.status(204).json(await ClientService.remove(req.params.id));
}

const login=async(req:Request,res:Response)=>{
    const token=await ClientService.login(req.body);
    if (token) {
        return res.status(201).json({"token":token});
    }
    return res.status(401).json({"message":'Unauthorize'});
}

export{findAll,findOne,create,update,remove,login}