import express,{Express,Request,Response} from "express"
import cors from "cors"
import morgan from "morgan";
import main from "./mocks/db.connection";
import clientRouter from "./routes/client.route";
import orderRouter from "./routes/order.route";
import pizzaRouter from "./routes/pizza.route";
import bodyParser from "body-parser";


const app:Express=express();
app.use(express.json());
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
main().then(res=>console.log("connexion réussit")).catch(err=>console.log(err.message));

app.use(cors());

app.get('/',(req:Request,res:Response)=>{
    res.status(200).send("<h1>Hello world</h1>");
});

app.use("/pizzas",pizzaRouter);
app.use("/orders",orderRouter);
app.use("/clients",clientRouter);

app.listen(5000,()=>{
    console.log("http://localhost:5000");
})

