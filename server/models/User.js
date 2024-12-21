const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        name:String,
        email:String,
        password:String
    }
)
const UserModel = mongoose.model("Users",UserSchema)

module.exports = UserModel;


////
// const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema({
//   userName: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   role: {
//     type: String,
//     default: "user",
//   },
// });

// const User1 = mongoose.model("User", UserSchema);
// module.exports = User1;



/////const express = require('express')
// const mongoose = require('mongoose')
// const cors = require('cors')
// const UserModel = require('./models/User')

// const app = express()
// app.use(express.json())
// app.use(cors())

// mongoose.connect("mongodb://127.0.0.1:27017/User")


// app.post("/Login",(req,res)=>
// {
//     const {email , password} = req.body;
//     UserModel.findOne({email:email})
//     .then(user=>{
//         if(user)
//         {
//         if(user.password===password)
//         {
//             res.json("Success")
//         }else{
//             res.json("Password is Incorrect")
//         }
//         }
//         else{
//             res.json("No User Found")
//         }
//     })
// })



// app.post('/Register',(req ,res)=>
// {
//     UserModel.create(req.body)
//     .then(Users=>res.json(Users))
//     .catch(err=>res.json(err))
// })


// app.listen(3000,()=>
// {
//     console.log("server is running")
// })