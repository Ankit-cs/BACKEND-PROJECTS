import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcryt, { hash } from "bcrypt";

const userSchema = new mongoose.Schema({
    id: {
        required: true,
        type: String,
        unique: true,
        lowercase: true,
    },
    username: {
        required: true,
        type: String,
        unique: true,
        lowercase: true,
        trim:true,
        index:true
    },
    email: {
        required: true,
        type: String,
        unique: true,
        lowercase: true,
        trim:true,
    },
    fullname: {
        required: true,
        type: String,
        trim:true,
        index:true
    },
    avatar: {
        type: String,
        required:true// cloudinary service like aws
    },
    coverImage: {
        type: String,
    },
    watchHistory: [
       {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Video"
       }
    ],
        password: {
        required: [true,"Password is required"],
        type: String,
    },
    refreshToken: {
        type: String,

    },
}, { timestamps: true });
userSchema.pre("save", async function(next){
   if(!this.iModified("password")) return next();
    this.password=bcryt.hash(this.password,10)
    next();
})
userSchema.methods.isPasswordCorrect=async function(password) {
    return await bcryt.compare(password,this.password)
}
userSchema.method.generateAccessToken=function(){
   return  jwt.sign({
        _id: this._id,
        email:this.email,
        username:this.username,
        fullname:this.fullname
    }),
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }
}
userSchema.method.generateRefreshToken=function(){
    return  jwt.sign({
         _id: this._id,
         email:this.email,
         username:this.username,
         fullname:this.fullname
     }),
     process.env.REFRESH_TOKEN_SECRET,
     {
         expiresIn:process.env.REFRESH_TOKEN_EXPIRY
     }
 }

export const User = mongoose.model("User", userSchema);
