import { NextFunction } from "express";
import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";

const salt = bcrypt.genSaltSync(10);

const UserSchema = new Schema(
  {
    username: String,
    name: String,
    lastname: String,
    country: String,
    dateOfBirth: Date,
    email: { type: String, unique: true },
    password: String,
    mentor: { type: [Schema.Types.ObjectId], ref: "User" },
    role: { type: Schema.Types.ObjectId, ref: "Role" },
    verify: { type: Boolean, default: false },
    token: String,
    skills: [String],
    avatar: String,
  },
  {
    methods: {
      hash(password: string, salt: string) {
        return bcrypt.hashSync(password, salt);
      },
      validatePassword(entryPass: string) {
        return bcrypt.compareSync(entryPass, this.password);
      },
    },
    versionKey: false,
  }
);

UserSchema.pre("save", function (next: NextFunction) {
  const user = this;
  if (!user.isModified("password")) return next();
  try {
    const hash = user.hash(user.password, salt);
    user.password = hash;
    return next();
  } catch (error) {
    return next(error);
  }
});

UserSchema.pre("findOneAndUpdate", function (next) {
  const update = this.getUpdate();
  //? Por resolver
});

export default model("User", UserSchema);
