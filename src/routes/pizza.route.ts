import { Router } from "express";
import * as PizzaController from "../controllers/pizza.controller"
import Authorize from "./middlewares/auth.middleware";


const pizzaRouter=Router();

pizzaRouter.get("/",Authorize,PizzaController.findAll);
pizzaRouter.get("/:id",PizzaController.findOne);
pizzaRouter.post("/",Authorize,PizzaController.create);
pizzaRouter.put("/:id",Authorize,PizzaController.update);
pizzaRouter.delete("/:id",Authorize,PizzaController.remove);


export default pizzaRouter;