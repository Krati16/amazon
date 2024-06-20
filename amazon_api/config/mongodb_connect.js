const mongoose = require('mongoose')
mongoose.connect("mongodb://0.0.0.0:27017/newkart",{});
const usersSchema = {
    firstname:String,
    lastname:String,
    email:String,
    phoneno:String,
    password:String,
    image:String
}
const users = mongoose.model("Users",usersSchema);
module.exports = users;
