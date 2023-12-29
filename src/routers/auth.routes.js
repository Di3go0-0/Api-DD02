import { Router } from "express";
import { register, login, logout } from "../controllers/auth.controllers.js";
import {registerSchema, loginSchema} from "../schema/user.schema.js";
import { validateSchema } from "../middleware/validateSchema.js";
import {adminToken} from "../middleware/adminToken.js";

const router = Router();

router.post("/register",adminToken, validateSchema(registerSchema), register);

router.post("/login",validateSchema(loginSchema), login);

router.post("/logout", logout);

export default router;
