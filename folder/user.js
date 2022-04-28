const mongoose=require('mongoose')

const createschema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
});

module.exports = mongoose.model("users",createschema)