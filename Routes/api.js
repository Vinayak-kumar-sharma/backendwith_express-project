import { Router } from "express";
import Authcontroller from "../Controllers/authentication.js";
import ProfileController from "../Controllers/profilecontroller.js"

const router = Router()

// *Post Rooutes
router.post("/auth/register",Authcontroller.register)
router.post("/auth/login",Authcontroller.login)

// *Get rOutes

router.get("/profile",ProfileController.index)

export default router