import { Router } from "express";
import { addUser, getUsers, updateUser } from "../controllers/user.controller";
const userRouter = Router();

userRouter.post("/register", addUser);
userRouter.put("/update", updateUser);
userRouter.get("/allusers", getUsers);

export default userRouter;
