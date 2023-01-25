import { Response } from "express";
import User from "../models/User";

const getUsers = async (_req, res: Response) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(error.code || 500).json({ message: error.message });
  }
};

export  { getUsers };
