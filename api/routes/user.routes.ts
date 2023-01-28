import { Router } from "express";
import {
  addUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.controller";
const userRouter = Router();

userRouter.post("/register", addUser);
userRouter.get("/user", getUser);
userRouter.get("/allusers", getUsers);
userRouter.put("/update", updateUser);
userRouter.delete("/delete", deleteUser);

export default userRouter;
