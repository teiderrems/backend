import { Request, Response } from "express"

import * as ClientService from "../services/client.service"
import { OrderModel } from "../mocks/models";

const findAll = async (req: any, res: Response) => {
    if (req.user && req.user.role=="admin"){
        try {
            return res.status(200).json(await ClientService.findAll());
        } catch (error: any) {

            return res.status(404).json({"message":error.message});
        }
    }
    return res.status(401).json({message:"UnAuthorize"});
}

const findOne = async (req: any, res: Response) => {
    if(req.user){
        const id:String=req.user._id;
        try {
            const orders=await OrderModel.find({owner:id});
            return res.status(200).json({user:await ClientService.findOne(req.params.id),orders});

        } catch (error: any) {
            return res.status(404).json({"message":error.message});
        }
    }
    return res.status(401)
    
}


const create = async (req: Request, res: Response) => {
    if(req.body.username){
        try {
            return res.status(201).json(await ClientService.create(req.body));

        } catch (error: any) {
            return res.status(404).json({"message":error.message});
        }
    }
    else
        return res.status(404).json({"message":"NotFound"});
}

const update = async (req: Request, res: Response) => {

    if(req.body && req.params){
        try {
            return res.status(201).json(await ClientService.update(req.params.id, req.body));
        } catch (error: any) {
            return res.status(404).json({"message":error.message});
        }
    }
    else
        return res.status(404).json({"message":"NotFound"});
}

const remove = async (req: Request, res: Response) => {

    if (req.params){
        try {
            return res.status(204).json(await ClientService.remove(req.params.id));
        } catch (error: any) {
            return res.status(404).json({"message":error.message});
        }
    }
    else
        return res.status(404).json({"message":"NotFound"});
}

const login = async (req: Request, res: Response) => {
    if (req.body){
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
    else
        return res.status(404).json({"message":"NotFound"});
}

export { findAll, findOne, create, update, remove, login }