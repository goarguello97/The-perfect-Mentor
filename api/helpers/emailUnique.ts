import User from "../models/User";


const emailUnique = async (email: string) => {
  if (!email) throw new Error("El email es necesariao.");
  const user = await User.findOne( { email } );
  if (user) {
    throw new Error(`El email ${email} ya se encuentra en uso.`);
  }
};

export default emailUnique;
