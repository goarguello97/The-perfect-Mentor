import { Request, Response } from "express";
import CustomError from "../helpers/CustomError";
import User from "../models/User";
import bcrypt from "bcrypt";
import Role from "../models/Role";
import {
  dataToken,
  generateToken,
  generateTokenRegister,
} from "../config/token";
import { AuthRequest } from "../interfaces/RequestInterface";
import { getTemplate, transporter } from "../utils/mail";

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(error.code || 500).json({ message: error.message });
  }
};

const getUser = async (req: Request, res: Response) => {
  const { id } = req.query;
  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const addUser = async (req: Request, res: Response) => {
  const { username, name, lastname, email, password, role } = req.body;
  const userEmail = await User.find({ email });
  const userUsername = await User.find({ username });
  try {
    if (userEmail.length > 0 && userUsername.length > 0)
      return res.status(403).json({ message: "The username and email already exists" });
    if (userUsername.length > 0)
      return res.status(403).json({ message: "User already exists" });
    if (userEmail.length > 0)
      return res.status(403).json({ message: "The email already exists" });

    const newUser = new User({
      username,
      name,
      lastname,
      email,
      password,
      role,
    });

    const token = generateTokenRegister(newUser);
    const template = getTemplate(username, token);

    try {
      await transporter.sendMail({
        from: `The Perfect Mentor <perfect.mentor.p5@gmail.com>`,
        to: email,
        subject: "Verify email",
        text: "...",
        html: template,
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }
    await newUser.save();
    res.status(201).json({ message: "User created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req: Request, res: Response) => {
  const body = req.body;
  const { id } = req.query;
  try {
    if (req.body.password) {
      req.body.password = bcrypt.hashSync(
        req.body.password,
        bcrypt.genSaltSync(10)
      );
    }
    const updatedUser = await User.findByIdAndUpdate(id, body, { new: true });
    if (!updatedUser) throw new CustomError("User not exist", 404);
    res.status(200).json({ message: "Updated user", updatedUser });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  const { idUser, idUserToDelete } = req.body;
  const user = await User.findById(idUser);
  const role = await Role.findById(user.role);
  try {
    if (!role) throw new CustomError("No role specified", 404);
    if (role.role !== "ADMIN")
      throw new CustomError("You do not have the necessary permissions", 404);
    await User.findByIdAndDelete(idUserToDelete);
    res.status(200).json({ message: "The user has been removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) throw new CustomError("User not found", 404);
    if (!user.verify) throw new CustomError("You must verify your account", 401);
    const passwordOk = user.validatePassword(password);
    if (!passwordOk) throw new CustomError("Invalid credentials", 401);
    const payload = {
      email: user.email,
      id: user.id,
    };
    const token = generateToken(payload);
    res.cookie("token", token);
    res.status(201).json({ message: "Correct login", token, payload });
  } catch (error) {
    res.status(error.code || 500).json({ message: error.message });
  }
};

const secret = async (req: AuthRequest, res: Response) => {
  res.json(req.user);
};

const logoutUser = async (req: Request, res: Response) => {
  res.clearCookie("token");
  res.sendStatus(205);
};

const verifyUser = async (req: Request, res: Response) => {
  const { token } = req.params;
  try {
    const data = await dataToken(token);
    if (data === null) {
      return res.status(500).json({ message: "Error" });
    }
    const { email } = data.user;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not exist" });
    }
    user.verify = true;
    await user.save();
    res.status(200).json({message:"Verified user"})
  } catch (error) {
    res.status(error.code || 500).json({ message: error.message });
  }
};

export {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
  loginUser,
  secret,
  logoutUser,
  verifyUser,
};
