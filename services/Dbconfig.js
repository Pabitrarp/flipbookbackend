const mongoose =require("mongoose");


const dbconnect=async()=>{
    try {
      await mongoose.connect("mongodb://localhost:27017/pageflick");
      console.log("dbconnectd successfully");
    } catch (error) {
        console.log("error in db connection",error);
    }
}

module.exports=dbconnect;