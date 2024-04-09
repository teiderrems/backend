import {  Schema,model } from "mongoose";

const PizzaSchema:Schema=new Schema({
    name:{
        type:String,
        unique:true,
        require:true
    },
    description:{
        type:String
    },
    price:{
        type:Number,
        default:0.0
    }
},{
    versionKey:false
});

const ClientSchema:Schema=new Schema({
    username:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        unique:true
    },
    firstname:{
        type:String
    },
    password:{
        type:String,
        require:true
    }
},{
    versionKey:false
});

const OrderSchema:Schema=new Schema({
    items:{
        type:[PizzaSchema]
    },
    quantity:{
        type:Number,
        default:0
    },
    Owner:ClientSchema
},{
    versionKey:false
})





const PizzaModel=model("pizzas",PizzaSchema);
const ClientModel=model("clients",ClientSchema);
const OrderModel=model("orders",OrderSchema);


export {PizzaModel,ClientModel,OrderModel,ClientSchema}

