const Adminmodel =require("../models/Admin");

const signin=async(req,res)=>{
    const {email,password}=req.body;
    try {
        const admin = await Adminmodel.findOne({email:email,password:password});
        if(admin){  
            res.status(200).json({message:"signin successfully",admin});    
        }else{
            res.status(400).json({message:"invalid credentials"});
        }
    } catch (error) {
        console.error("Error during sign-in:", error);
        res.status(500).json({message:"Internal server error"});    
    }
}

module.exports={signin};