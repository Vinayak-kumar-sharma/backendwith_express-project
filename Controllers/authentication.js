import prisma from "../Database/db.config.js";
import vine ,{errors} from "@vinejs/vine";
import { loginSchema, registerSchema } from "../Validation_byvinejs/validationfor_auth.js";
import bcrypt from "bcrypt";


class Authcontroller {
  static async register(req,res) {

    try {
      const body = req.body
      const validator = vine.compile(registerSchema)
      const payload = await validator.validate(body)

      // checking Email is unique or not

      const finduser = await prisma.user.findUnique({
        where:{
          email:payload.email
        }
      })

      if (finduser) {
        return res.status(400).json({errors:{
          email:"email already taken . Please use another one 🧑‍💻"
        }})
      }


      // * Encrypt the in coming password .... 
      const salt = bcrypt.genSaltSync(10)
      payload.password = bcrypt.hashSync(payload.password,salt)

      const User = await prisma.user.create({
        data:payload,
      });
      return res.json({
        stauts: 200,
        message:"USER created Successfully",
        User,
      })

    } catch (error) {
      if (error instanceof errors.E_VALIDATION_ERROR) {
        //console.log(error.messages)

        return res.status(400).json({msg:"galat entries h isme ✨name nhi h , ✨email nhi h, ✨password nhi h, ✨password_confirmation nhi h , sare fields hone chaiye."})
      }
    }
  }

  static async login(req,res) {
  try {
  const body = req.body

  const validator = vine.comppile(loginSchema)
  const payload = await validator.validate(body)

  return res.json({payload})
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
    //console.log(error.messages)

    return res.status(400).json({msg:"Not valid user!😩"})
    }
  }
  }
  }

export default Authcontroller