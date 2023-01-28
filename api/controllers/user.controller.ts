import { Request, Response } from "express";
import CustomError from "../helpers/CustomError";
import User from "../models/User";
import bcrypt from "bcrypt";
import Role from "../models/Role";

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
  // const role = await Role.findOne({ role: "MENTEE" });
  try {
    if (userEmail.length > 0 && userUsername.length > 0)
      return res.status(403).json({ message: "El usuario y email ya existe" });
    if (userUsername.length > 0)
      return res.status(403).json({ message: "El usuario ya existe" });
    if (userEmail.length > 0)
      return res.status(403).json({ message: "El email ya existe" });

    const newUser = new User({
      username,
      name,
      lastname,
      email,
      password,
      role,
    });
    await newUser.save();
    res.status(201).json({ message: "Usuario creado" });
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
    if (!updatedUser) throw new CustomError("El usuario no existe", 404);
    res.status(200).json({ message: "Usuario actualizado", updatedUser });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  const { idUser, idUserToDelete } = req.body;
  const user = await User.findById(idUser);
  const role = await Role.findById(user.role);
  try {
    if (!role) throw new CustomError("No existe rol especificado", 404);
    if (role.role !== "ADMIN")
      throw new CustomError("No tiene los permisos necesarios", 404);
    await User.findByIdAndDelete(idUserToDelete);
    res.status(200).json({ message: "El usuario ha sido eliminado" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getUsers, getUser, addUser, updateUser, deleteUser };
