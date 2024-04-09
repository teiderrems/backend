import { ClientModel, ClientSchema } from "../mocks/models";
import bcrypt from "bcrypt"

import * as jwt from "jsonwebtoken"

import dotenv from "dotenv";

dotenv.config();

interface Client{
    _id:String
    username:String;
    email:String
    firstname:String
    password:String
};

const findAll=async()=>{
    return await ClientModel.find({});
}

const findOne=async(id:any)=>{
    return await ClientModel.findById(id)??{};
}


const create= async(client:any)=>{
    const salt=bcrypt.genSaltSync(10);
    client.password=bcrypt.hashSync(client.password,salt);
    return await ClientModel.create(client);
}

const update=async(id:any,client:any)=>{
    client.id=id;
    return await ClientModel.findOneAndUpdate(client)??{};
}

const remove=async(id:any)=>{
    return await ClientModel.findByIdAndDelete(id)??{};
}

const login=async(credentiel:any)=>{
    if(credentiel!=null){
        const user:Client=(((await ClientModel.findOne({email:credentiel.email}))||(await ClientModel.findOne({username:credentiel.username}))) as Client);
        if (user!=null && user!=undefined) {
            const hashpw=user.password;
            if (bcrypt.compareSync(credentiel.password,(hashpw as string))) {
                const token= jwt.sign({_id:user._id,username:user.username,firstname:user?.firstname,email:user?.email},process.env.SECRET_KEY!,{
                    algorithm:"HS256",
                    expiresIn:"1h"
                });
                return token;
            }
        }
    }
    return "";
}


export {findAll,findOne,create,update,remove,login}