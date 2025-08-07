import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/User"


const login = async(req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email})

        if (!user) {
            res.status(401).json({success: false, message: "user not found"})
            return
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            res.status(401).json({success:false, message: "Invalide credencials"})
            return
        }

        const token = jwt.sign({id: user._id, role:user.role}, process.env.JWT_SECRET, {expiresIn: '1h'})

        res.status(200).json({success: true, message: "login successfully", token, user: {id: user._id, name: user.name, email: user.email, role: user.role}})

    } catch (error) {
        res.status(500).json({success: false, message: "Internal server error"})
        return
    }

}

export{login}