const mongoose =require("mongoose");


const dbconnect=async()=>{
    try {
      await mongoose.connect("mongodb+srv://Pabi:Pabi1234@user.zjsm9hu.mongodb.net/pageflick?retryWrites=true&w=majority&appName=user");
      console.log("dbconnectd successfully");
    } catch (error) {
        console.log("error in db connection",error);
    }
}

module.exports=dbconnect;