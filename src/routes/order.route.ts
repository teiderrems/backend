import { Router } from "express";
import * as OrderController from "../controllers/order.controller"
import Authorize from "./middlewares/auth.middleware";


const orderRouter=Router();

orderRouter.get("/",Authorize,OrderController.findAll);
orderRouter.get("/:id",Authorize,OrderController.findOne);
orderRouter.post("/",Authorize,OrderController.create);
orderRouter.put("/:id",Authorize,OrderController.update);
orderRouter.delete("/:id",Authorize,OrderController.remove);


export default orderRouter;