import mongoose from "mongoose"
import app from "./index.js"
import dotenv from "dotenv"
dotenv.config({
    path:"./config.env"
})
const DB_URL=process.env.DATABASE.replace("<password>",process.env.PASSWORD)
const PORT=process.env.PORT||4555
mongoose.connect(DB_URL).then(()=>console.log("database connected successfully"))
app.listen(PORT,() => console.log(`server is running on port :fire::fire::fire:${PORT}...`));