import express, { json, urlencoded } from "express";
const app = express();
import cors from "cors";
app.use(cors())
app.use(json())
import { default as mongoose } from "mongoose";
app.use(urlencoded({ extended: true }))

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/rolebasedauth")
        console.log("Mongodb is connected ... ")
    } catch (error) {
        mongoose.disconnect()
        process.exit(1)
    }
}

connectDB()


app.listen(4000, () => {
    console.log(`The app is listen at http//localhost:${4000}`)
})