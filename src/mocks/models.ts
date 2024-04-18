import {  Schema,model } from "mongoose";

const PizzaSchema:Schema=new Schema({
    name:{
        type:String,
        require:true
    },
    description:{
        type:String
    },
    price:{
        type:Number,
        default:0.0
    },
    owner:{
        type:String,
        require:true,
    }
},{
    versionKey:false
});

enum Role{
    GUEST='guest',
    ADMIN='admin',
    SELLER='seller'
}

const ClientSchema:Schema=new Schema({
    username:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
    },
    firstname:{
        type:String
    },
    password:{
        type:String,
        require:true
    },
    role:{
        type:typeof Role,
        default:Role.GUEST
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
    owner:{
        type:String
    },
    amount:{
        type:Number,
        default:0.0
    }
},{
    versionKey:false
})





const PizzaModel=model("pizzas",PizzaSchema);
const ClientModel=model("clients",ClientSchema);
const OrderModel=model("orders",OrderSchema);


export {PizzaModel,ClientModel,OrderModel,ClientSchema}

