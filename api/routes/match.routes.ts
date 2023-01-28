import { Router } from "express";
import { matchRequest } from "../controllers/match.controller";
const matchRouter = Router();

matchRouter.post("/", matchRequest);

export default matchRouter;
