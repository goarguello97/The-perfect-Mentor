import { model, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    username: String,
    name: String,
    lastname: String,
    country: String,
    dateOfBirth: Date,
    email: String,
    password: String,
    mentor: { type: [Schema.Types.ObjectId], ref: "User" },
    role: { type: Schema.Types.ObjectId, ref: "Role" },
    verify: { type: Boolean, default: false },
    token: String,
    skills: [String],
    avatar: String,
  },
  {
    versionKey: false,
  }
);


export default model("User", UserSchema);
