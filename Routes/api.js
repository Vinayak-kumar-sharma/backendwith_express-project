import { Router } from "express";
import Authcontroller from "../Controllers/authentication.js";

const router = Router()


router.post("/auth/register",Authcontroller.register)
router.post("/auth/login",Authcontroller.login)


export default router