import express, { json, urlencoded } from "express";
const app = express();
import cors from "cors";
import ConnectDB from "./db/dbConnection.js";
app.use(cors())
app.use(json())

app.use(urlencoded({ extended: true }))



app.listen(4000, () => {
    ConnectDB();
    console.log(`The app is listen at http//localhost:${4000}`)
})