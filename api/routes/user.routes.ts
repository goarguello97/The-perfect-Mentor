import { Router } from "express";
import { checkSchema } from "express-validator";
import {
  addUser,
  deleteUser,
  getUser,
  getUsers,
  loginUser,
  logoutUser,
  secret,
  updateUser,
  verifyUser,
} from "../controllers/user.controller";
import validateFields from "../middlewares/validateFields";
import { user } from "../schemas/user";
const userRouter = Router();

userRouter.post("/register",checkSchema(user),validateFields, addUser);
userRouter.get("/user", getUser);
userRouter.get("/allusers", getUsers);
userRouter.put("/update", updateUser);
userRouter.delete("/delete", deleteUser);
userRouter.post("/login", loginUser);
userRouter.get("/me", secret);
userRouter.post("/logout", logoutUser);
userRouter.get("/verify/:token", verifyUser)

export default userRouter;
