import jwt from "jsonwebtoken";

const generatedAccessToken = async (userId) => {
  const token = await jwt.sign(
    { id: userId },
    process.env.SECRET_KEY_ACCESS_TOKEN || "default_secret_key",
    { expiresIn: "30d" }
  );

  return token;
};

export default generatedAccessToken;
