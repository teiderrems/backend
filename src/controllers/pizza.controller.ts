import {Request,Response} from "express"

import * as PizzaService from "../services/pizza.service"


const findAll=async(req:Request,res:Response)=>{
    return  res.status(200).json(await PizzaService.findAll());
}

const findOne=async(req:Request,res:Response)=>{
    return  res.status(200).json(await PizzaService.findOne(req.params.id));
}


const create= async(req:Request,res:Response)=>{
    const{pizza}= req.body;
    console.log(pizza);
    return  res.status(201).json(await PizzaService.create(pizza??req.body));
}

const update=async(req:Request,res:Response)=>{
    const{pizza}=req.body;
    return  res.status(201).json(await PizzaService.update(req.params.id,pizza??req.body));
}

const remove=async(req:Request,res:Response)=>{
    // const {id}=req.params.id;
    return  res.status(204).json(await PizzaService.remove(req.params.id));
}

export{findAll,findOne,create,update,remove}