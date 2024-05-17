import { Router } from "express";
import {
  getAllUsers,
  userLogin,
  userSignup,
  verifyUser,
} from "../controllers/user-controllers.js";
import {
  loginValidator,
  signupValidator,
  validate,
} from "../utils/validators.js";
import { verifyToken } from "../utils/token-manager.js";

const userRoutes = Router();

userRoutes.get("/", getAllUsers); // Assuming this is your GET all users route
userRoutes.post("/signup", validate(signupValidator), userSignup); // Change to POST for user signup
userRoutes.post("/login", validate(loginValidator), userLogin); // Change to POST for user signup
userRoutes.get("/auth-status", verifyToken, verifyUser);

export default userRoutes;
