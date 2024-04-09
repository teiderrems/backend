import { PizzaModel } from "../mocks/models";


const findAll=async()=>{
    return await PizzaModel.find({});
}

const findOne=async(id:any)=>{
    return await PizzaModel.findById(id)??{};
}


const create= async(pizza:any)=>{
    return await PizzaModel.create(pizza);
}

const update=async(id:any,pizza:any)=>{
    pizza.id=id;
    return await PizzaModel.findOneAndUpdate(pizza)??{};
}

const remove=async(id:any)=>{
    return await PizzaModel.findByIdAndDelete(id)??{};
}


export {findAll,findOne,create,update,remove}