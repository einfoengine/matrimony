// Import Modules
import jwt from 'jsonwebtoken';

// Models
import User from '../models/User.js';

// Controllers

// Registration
export const Register = async (req, res)=>{
    try{
        const user = new User(req.body);
        await user.save();
        res.json(user);
    }catch(err){
        console.log({
            status: "Error registration!",
            err: err,
            req: req.body
        });
        res.json(err);
    }
}

// User login and authentication
export const Login = async (req, res)=>{
    try{
        const {user_name, password} = req.body;
        // Find the user
        var user = await User.findOne({user_name, password}).exec();
        if(!user) return res.status(400).send("Bad credential!");
        // Create token
        const token = jwt.sign({_id: user._id, status: user.status}, process.env.SECRET, {expiresIn: '1d'});
        user.password = undefined;
        res.cookie('token', token, {httpOnly: true});
        res.json({
            user, token
        });
        
    }catch(err){
        res.json(err);
    }
}
export const Logout = async (req, res) => {
    try {
        const clear=await res.clearCookie("token");
        console.log("Logout request!", clear)
        return res.send("Clear cookie");
    } catch (err) {
        console.log("Logout error: ", err);
        res.send("Logout error: ", err);
    }
}

// Dashboaard

// GetUsers
export const GetUsers = async (req, res)=>{
    try {
        const users = await User.find();
        // console.log(users);
        res.json(users);
    } catch (err) {
        res.json(err)
    }
}