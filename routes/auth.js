import express from "express"
import { login } from "../constoller/authController"
const router = express.Router()

router.post("/login", login)

export default router