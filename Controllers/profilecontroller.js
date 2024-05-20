class ProfileController {
  static async index(req,res) {
    const user = req.us
    return res.json({
      status : 200,
      user,
    })
  }
}

export default ProfileController