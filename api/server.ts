import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db";
import router from "./routes/index.routes";
import createRoles from "./config/initialSetup";
import morgan from "morgan"

const corsOptions = {
  origin: ["http://localhost:3001"],
  //update: or "origin: true," if you don't wanna add a specific one
  credentials: true,
};

const app = express();
dotenv.config();
const PORT = process.env.SERVER_PORT || 3000;
connectDB();
createRoles();
app.use(express.json());
app.use(cors(corsOptions));
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server running in ${PORT}`);
});
