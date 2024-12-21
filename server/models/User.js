const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        name:String,
        email:String,
        password:String,
        image: String,
        Role: String,
        Member_Since: String,
    }
)
const UserModel = mongoose.model("Users",UserSchema)

module.exports = UserModel;

