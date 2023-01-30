import { Schema } from "express-validator";
import emailUnique from "../helpers/emailUnique";

export const user: Schema = {
  username: {
    notEmpty: { errorMessage: "El nombre es requerido." },
    isLength: {
      errorMessage: "Mínimo 3 caracteres y máximo 30 caracteres.",
      options: { min: 3, max: 30 },
    },
  },
  name: {
    notEmpty: { errorMessage: "El nombre es requerido." },
    isLength: {
      errorMessage: "Mínimo 3 caracteres y máximo 30 caracteres.",
      options: { min: 3, max: 30 },
    },
  },
  lastname: {
    notEmpty: { errorMessage: "El apellido es requerido." },
    isLength: {
      errorMessage: "Mínimo 3 caracteres y máximo 30 caracteres.",
      options: { min: 3, max: 30 },
    },
  },
  country: {
    optional: { options: { checkFalsy: true } },
    isLength: {
      errorMessage: "Mínimo 3 caracteres y máximo 30 caracteres.",
      options: { min: 3, max: 30 },
    },
  },
  dateOfBirth: {
    optional: { options: { checkFalsy: true } },
    isDate: { errorMessage: "Ingrese una fecha válida." },
  },
  email: {
    notEmpty: { errorMessage: "El email es requerido." },
    isEmail: { errorMessage: "Ingrese un email válido." },
    custom: { options: emailUnique },
  },
  password: {
    matches: {
      errorMessage:
        "Mínimo 8 caracteres, una mayúscula, un número y un carácter especial.",
      options: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    },
  },
  skills: {
    optional: { options: { checkFalsy: true } },
    isArray: { errorMessage: "Ingrese bien los datos." },
  },
};
