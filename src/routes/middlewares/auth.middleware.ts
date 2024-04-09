import { NextFunction,Request,Response } from "express";
import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const Authorize=(req:any,res:Response,next:NextFunction)=>{

    const token=req.header('authorization')?.split(" ")[1];
    let decode:any={};
    if (token!==""){
        jwt.verify(token,process.env.SECRET_KEY!,function(error: any,decoded: any){
            if (error) {
                return res.status(401).json({"message":'Unauthorized'});
            }
            decode={...decode,_id:decoded._id,username:decoded.username,email:decoded?.email,firstname:decoded?.firstname};
        });
    }
    else{
        return res.status(401).json({"message":'Unauthorized'});
    }

    
    if (decode) {
        req.user={_id:decode._id,username:decode.username,email:decode?.email,firstname:decode?.firstname};
        next();
    }
    else
        return res.status(401).json({"message":'Unauthorize'});
}

export default Authorize;