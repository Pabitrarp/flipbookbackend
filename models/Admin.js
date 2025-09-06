const mongoose=require("mongoose");

const Aminschma=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    documents:[{
        type:mongoose.Types.ObjectId,}]
},
{
    timestamps:true, versionKey:false
});

module.exports=mongoose.model("Admin",Aminschma);