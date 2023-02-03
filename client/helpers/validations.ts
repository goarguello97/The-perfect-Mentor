import { ErrorRegister } from "../interfaces/error.interface";
import { User } from "./user.interface";

export const validationRegister = (values: User) => {
  let errors = {} as ErrorRegister;

  let usernameRegex = new RegExp(
    /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚúÜü]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/
  );
  let emailRegex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
  let passwordRegex = new RegExp(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
  );

  if (!values.username) {
    errors.username = "Username is required";
  } else if (values.username.length < 2) {
    errors.username = "The username must have a minimum of 3 characters";
  } else if (values.username.length > 30) {
    errors.username = "The username cannot be longer than 30 characters";
  } else if (!usernameRegex.test(values.username)) {
    errors.username = "The username can only contain letters or numbers";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Email is not valid";
  } else if (values.email.length > 50) {
    errors.email = "The email must not have more than 50 characters";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (!passwordRegex.test(values.password)) {
    errors.password =
      "The password is invalid. Must contain a capital letter, a number and a special character";
  } else if (values.password.length < 8) {
    errors.password = "The password must have at least 8 characters";
  } else if (values.password.length > 30) {
    errors.password = "The password must not have more than 30 characters";
  }

  return errors;
};

export const validationLogin = (values: User) => {
  let errors = {} as ErrorRegister;
  let emailRegex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
  let passwordRegex = new RegExp(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
  );

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Email is not valid";
  } else if (values.email.length > 50) {
    errors.email = "The email must not have more than 50 characters";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (!passwordRegex.test(values.password)) {
    errors.password =
      "The password is invalid. Must contain a capital letter, a number and a special character";
  } else if (values.password.length < 8) {
    errors.password = "The password must have at least 8 characters";
  } else if (values.password.length > 30) {
    errors.password = "The password must not have more than 30 characters";
  }

  return errors;
};
