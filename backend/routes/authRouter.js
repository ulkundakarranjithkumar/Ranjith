import { Router } from "express";
import registerUser from "../controller/registerUser.js";
import { loginUser } from "../controller/LoginUser.js";

const authRouter = Router();

authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);
export default authRouter;
