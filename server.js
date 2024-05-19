import express from "express"
import "dotenv/config"
const app = express()
const PORT = process.env.PORT || 8000

// MiddLe wares .....
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get("/",(req,res)=> {
  return res.json({msg:"hello Codders!"})
}
)

// RouTes working coDe .....
import apiroutes from "./Routes/api.js"
app.use("/api",apiroutes)

app.listen(PORT, ()=>{
  console.log(`Working.. http://localhost:${PORT}`)
})


