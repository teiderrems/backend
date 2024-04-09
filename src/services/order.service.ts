import { OrderModel } from "../mocks/models";


const findAll=async()=>{
    return await OrderModel.find({});
}

const findOne=async(id:any)=>{
    return await OrderModel.findById(id)??{};
}


const create= async(order:any)=>{
    return await OrderModel.create(order);
}

const update=async(id:any,order:any)=>{
    order.id=id;
    return await OrderModel.findOneAndUpdate(order)??{};
}

const remove=async(id:any)=>{
    return await OrderModel.findByIdAndDelete(id)??{};
}


export {findAll,findOne,create,update,remove}