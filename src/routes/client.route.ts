import { Router } from "express";
import * as ClientController from "../controllers/client.controller"


const clientRouter=Router();

clientRouter.get("/",ClientController.findAll);
clientRouter.get("/:id",ClientController.findOne);
clientRouter.post("/",ClientController.create);
clientRouter.put("/:id",ClientController.update);
clientRouter.delete("/:id",ClientController.remove);
clientRouter.post("/auth",ClientController.login);


export default clientRouter;