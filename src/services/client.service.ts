import { ClientModel } from "../mocks/models";
import bcrypt from "bcrypt"

import * as jwt from "jsonwebtoken"

import dotenv from "dotenv";
import { Error } from "mongoose";

dotenv.config();

interface Client{
    _id:String
    username:String;
    email:String
    firstname:String
    password:String
};

const findAll=async()=>{
    try {
        return await ClientModel.find({});
    } catch (error:any) {
        return error.message;
    }
}

const findOne=async(id:any)=>{
    try {
        return await ClientModel.findById(id);
    } catch (error:any) {
        return error.message;
    }
}


const create= async(client:any)=>{
    const salt=bcrypt.genSaltSync(10);
    client.password=bcrypt.hashSync(client.password,salt);
    try {
        return await ClientModel.create(client);
    } catch (error:any) {
        return error.message;
    }
}

const update=async(id:any,client:any)=>{
    client.id=id;
    try {
        return await ClientModel.findOneAndUpdate(client);
    } catch (error:any) {
        return error.message;
    }
}

const remove=async(id:any)=>{
    try {
        return await ClientModel.findByIdAndDelete(id);
    } catch (error:any) {
        return error.message;
    }
}

const getClient=async(username:string)=>{
    try {
        return (((await ClientModel.findOne({email:username}))||(await ClientModel.findOne({username:username}))) as Client);
    } catch (error:any) {
        return error.message;
    }
}

const login=async(credentiel:any)=>{
    
    if(credentiel!=null){
        const user:any=await (getClient(credentiel.username));
        if (user!=null && user!=undefined) {
            
            const hashpw=user.password;
            const islog=bcrypt.compareSync(credentiel.password,(hashpw as string));
            if (islog) {
                
                const token= jwt.sign({_id:user._id,username:user.username,firstname:user?.firstname,email:user?.email},process.env.SECRET_KEY!,{
                    algorithm:"HS256",
                    expiresIn:"5m"
                });
                return token;
            }
        }
    }
    return "";
}


export {findAll,findOne,create,update,remove,login}