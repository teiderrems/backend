import { Request, Response } from "express"

import * as ClientService from "../services/client.service"
import { OrderModel } from "../mocks/models";


const findAll = async (req: Request, res: Response) => {
    try {
        return res.status(200).json(await ClientService.findAll());
    } catch (error: any) {
        
        return res.status(404).json({"message":error.message});
    }
}

const findOne = async (req: any, res: Response) => {

    try {
        const orders=await OrderModel.find({Owner:req?.user});
        return res.status(200).json({user:await ClientService.findOne(req.params.id),orders});
        
    } catch (error: any) {
        return res.status(404).json({"message":error.message});
   
    }
    
}


const create = async (req: Request, res: Response) => {
    const { client } = req.body;
    try {
        return res.status(201).json(await ClientService.create(client ?? req.body));
        
    } catch (error: any) {
        return res.status(404).json({"message":error.message});
        
    }
}

const update = async (req: Request, res: Response) => {
    const { client } = req.body;
    try {
        return res.status(201).json(await ClientService.update(req.params.id, client ?? req.body));
        
    } catch (error: any) {
        return res.status(404).json({"message":error.message});
        
    }
}

const remove = async (req: Request, res: Response) => {

    try {
        return res.status(204).json(await ClientService.remove(req.params.id));
        
    } catch (error: any) {
        return res.status(404).json({"message":error.message});
        
    }
}

const login = async (req: Request, res: Response) => {
    const token = await ClientService.login(req.body);
    if (token) {
        try {
            return res.status(201).json({ "token": token });
            
        } catch (error:any) {
            return res.status(404).json({"message":error.message});
           
        }
    }
    try {
        return res.status(401).json({ "message": 'Unauthorize' });
       
    } catch (error:any) {
        return res.status(404).json({"message":error.message});
       
    }
}

export { findAll, findOne, create, update, remove, login }