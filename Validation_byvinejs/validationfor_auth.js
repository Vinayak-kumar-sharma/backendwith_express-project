import vine from "@vinejs/vine";



export const registerSchema = vine.object({
  name: vine.string().minLength(2).maxLength(140),
  email:vine.string().email(),
  password: vine.string().minLength(4).maxLength(15).confirmed(),
})

export const loginSchema = vine.object({
  email:vine.string().email(),
  password: vine.string()
})