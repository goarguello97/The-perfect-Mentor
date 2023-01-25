import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db";
import router from "./routes/index.routes";
import createRoles from "./config/initialSetup";

const app = express();
dotenv.config();
const PORT = process.env.SERVER_PORT || 3000;
connectDB();
createRoles();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server running in ${PORT}`);
});
