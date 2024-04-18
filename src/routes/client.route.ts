import { Router } from "express";
import * as ClientController from "../controllers/client.controller"
import Authorize from "./middlewares/auth.middleware";


const clientRouter=Router();

clientRouter.get("/",Authorize,ClientController.findAll);
clientRouter.get("/:id",Authorize,ClientController.findOne);
clientRouter.post("/",ClientController.create);
clientRouter.put("/:id",Authorize,ClientController.update);
clientRouter.delete("/:id",Authorize,ClientController.remove);
clientRouter.post("/auth",ClientController.login);


export default clientRouter;