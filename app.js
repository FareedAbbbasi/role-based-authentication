const express = require("express")
const app = express();
const cors = require("cors")
app.use(cors())
app.use(express.json())
const {default: mongoose} = require("mongoose")
app.use(express.urlencoded({ extended: true }))

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/role_base_auth")
        console.log("Mongodb is connected ... ")
    } catch (error) {
        mongoose.disconnect()
        process.exit(1)
    }
}

connectDB()

app.listen(process.env.PORT, () => {
    console.log(`The app is listen at http//localhost:${4000}`)
})