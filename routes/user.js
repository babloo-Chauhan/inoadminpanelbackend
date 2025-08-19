import { Router } from "express";
import {
  deleteUserById,
  forgotPasswordController,
  getAllUsers,
  loginController,
  logoutController,
  refreshToken,
  registerUserController,
  resetpassword,
  updateUserDetails,
  uploadAvatar,
  userDetails,
  verifyEmailController,
  verifyForgotPasswordOtp,
} from "../controllers/user.js";
import auth from "../middleware/auth.js";


const userRouter = Router();

userRouter.post("/register", registerUserController);
userRouter.get("/verify-email", verifyEmailController);

// Login should NOT require auth
userRouter.post("/login", loginController);

// Logout should require auth if you want to ensure user is logged in
userRouter.get("/logout", auth, logoutController);

// Protected routes
userRouter.put("/update-user/:id",  updateUserDetails);

// Forgot password routes (public)
userRouter.put("/forgot-password", forgotPasswordController);
userRouter.put("/verify-forgot-password-otp", verifyForgotPasswordOtp);
userRouter.put("/reset-password", resetpassword);

// Token refresh (usually public, uses refresh token from cookie)
userRouter.post("/refresh-token", refreshToken);

// Protected routes
userRouter.get("/user-details", auth, userDetails);
userRouter.get("/get-users",  getAllUsers); // protect if private
userRouter.delete("/delete-user/:id",deleteUserById)



export default userRouter;
