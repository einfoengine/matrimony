import mongoose from "mongoose";
// Model
import Biodata from "../models/Biodata.js";
import User from "../models/User.js";

var ObjectId = mongoose.Types.ObjectId; 

export const biodataCreate = async (req, res)=>{
    try {
        const response = await Biodata.updateOne({user: req.body.user}, req.body, {upsert: true});
        const user = await User.updateOne({_id: req.body.user}, {biodata: "complete"}, {upsert: true});
        res.json(response);
    } catch (err) {
        console.log("Biodata update error:");
        console.log(err);
        res.json(err);
    }
}

export const biodataGet = async (req, res) => {
    const userId = new ObjectId(req.query.user);
    const biodata = await Biodata.findOne({user: userId});
    res.json(biodata);
}

