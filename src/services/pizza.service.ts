import { PizzaModel } from "../mocks/models";


const findAll=async()=>{
    try {
        return await PizzaModel.find({});
    } catch (error:any) {
        return error.message;
    }
}

const findOne=async(id:any)=>{
    try {
        return await PizzaModel.findById(id);
    } catch (error:any) {
        return error.message;
    }
}


const create= async(pizza:any)=>{
    try {
        return await PizzaModel.create(pizza);
    } catch (error:any) {
        return error.message;
    }
}

const update=async(id:any,pizza:any)=>{
    pizza.id=id;
    try {
        return await PizzaModel.findOneAndUpdate(pizza);
    } catch (error:any) {
        return error.message;
    }
}

const remove=async(id:any)=>{
    try {
        return await PizzaModel.findByIdAndDelete(id);
    } catch (error:any) {
        return error.message;
    }
}



export {findAll,findOne,create,update,remove}