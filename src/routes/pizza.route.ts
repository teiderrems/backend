import { Router } from "express";
import * as PizzaController from "../controllers/pizza.controller"


const pizzaRouter=Router();

pizzaRouter.get("/",PizzaController.findAll);
pizzaRouter.get("/:id",PizzaController.findOne);
pizzaRouter.post("/",PizzaController.create);
pizzaRouter.put("/:id",PizzaController.update);
pizzaRouter.delete("/:id",PizzaController.remove);


export default pizzaRouter;