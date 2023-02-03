import User from "../models/User";

const usernameUnique = async (username: string) => {
  if (!username) throw new Error("Username is required");
  const user = await User.findOne({ username });
  if (user) {
    throw new Error(`The username ${username} is already in use.`);
  }
};

export default usernameUnique;
