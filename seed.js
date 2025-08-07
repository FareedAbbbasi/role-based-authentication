import dotenv from 'dotenv';
import bcrypt from"bcrypt"
import User from './models/User.js';
import mongoose from 'mongoose';
dotenv.config();


const MONGO_URI = process.env.MONGO_URI ||  "mongodb://localhost:27017/rolebasedauth"

const register = async () => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log("✅ Connectednpm run  to MongoDB");
        const hashPassword = await bcrypt.hash("admin", 10)
        const newUser = new User({
            name : "admin",
            email: "admin@gmail.com",
            password: hashPassword,
            address: "admin address",
            role: "admin"
        })
        await newUser.save();
        console.log("Admin user created successfuly created")
    } catch (error) {
        console.log(error)
    }
}

register()

