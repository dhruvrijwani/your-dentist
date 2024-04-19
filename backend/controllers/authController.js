import User from '../model/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';



const register = async (req, res) => {
    try {
        const { email, name, password } = req.body;

        console.log("Request body:", req.body);

        if (!email || !name || !password) {
            return res.status(400).json({ message: "Email, name, and password are required" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, name, password: hashedPassword });
        await newUser.save();
        res.status(200).json({ success: true, message: "User registered successfully", user: newUser });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ success: false, message: "An error occurred while registering user" });
    }
};



const login = async (req,res)=> {
    try {
        const {email, password} = req.body
        const user = await User.findOne({email})
        if (!user) {
            return res.status(404).json({success:false, message:"User not found"})
        }
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            return res.status(404).json({success:false, message:"Invalid Password"})
        }

        const token = jwt.sign({userId:user._id, email:user.email},process.env.JWT_SECRET_KEY,{ expiresIn: process.env.JWT_EXPIRES })
        res.status(200).json({success:true, message:"User Login Successful", data:{user, token}})


    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Internal Server Error'})
        
    }
}




export { register, login };