import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const SECRET = process.env.SECRET;

export function generateToken(payload: any) {
  const token = jwt.sign({ user: payload }, SECRET, { expiresIn: "1h" });
  return token;
}

export function generateTokenRegister(payload: {}) {
  const token = jwt.sign({ user: payload }, SECRET, { expiresIn: "10h" });
  return token;
}

export function dataToken(token: string) {
  let data = null;
  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) {
      console.log(err);
    } else {
      data = decoded;
    }
  });
  return data;
}

export function validateToken(token: any) {
  return jwt.verify(token, SECRET);
}
