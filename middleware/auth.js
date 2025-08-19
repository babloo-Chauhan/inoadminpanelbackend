import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  try {
    let token =
      req.cookies?.accessToken ||
      req.headers?.authorization?.split(" ")[1] ||
      null;

    if (!token) {
      return res.status(401).json({
        message: "Token not provided",
        error: true,
        success: false,
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.SECRET_KEY_ACCESS_TOKEN);

    if (!decoded) {
      return res.status(403).json({
        message: "Invalid token",
        error: true,
        success: false,
      });
    }

    req.userId = decoded.id; // Attach user id to request object
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized: " + (error.message || "Invalid token"),
      error: true,
      success: false,
    });
  }
};

export default auth;
