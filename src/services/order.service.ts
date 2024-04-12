import { OrderModel } from "../mocks/models";


const findAll=async()=>{
    try {
        return await OrderModel.find({});
    } catch (error:any) {
        return error.message;
    }
}

const findOne=async(id:any)=>{
    try {
        return await OrderModel.findById(id);
    } catch (error:any) {
        return error.message;
    }
}


const create= async(order:any)=>{
    try {
        return await OrderModel.create(order);
    } catch (error:any) {
        return error.message;
    }
}

const update=async(id:any,order:any)=>{
    order.id=id;
    try {
        return await OrderModel.findOneAndUpdate(order);
    } catch (error:any) {
        return error.message;
    }
}

const remove=async(id:any)=>{
    try {
        return await OrderModel.findByIdAndDelete(id);
    } catch (error:any) {
        return error.message;
    }
}

export {findAll,findOne,create,update,remove}