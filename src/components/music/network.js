import { Router } from "express";
import * as Controller from "./controller";

const musicRouter =Router();
//LEER TODO
musicRouter.route("/").get(Controller.findAll);
//CREAR
musicRouter.route("/").post(Controller.create);
//BUSCAR
musicRouter.route("/api/v1/songs/:id").put(Controller.update);


export default musicRouter;