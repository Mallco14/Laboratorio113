import { Router } from "express";
import * as Controller from "./controller";

const userRouter = Router();

//crear usuario
userRouter.route("/").post(Controller.create);

export default userRouter;