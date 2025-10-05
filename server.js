const express=require("express");
const dbconnect = require("./services/Dbconfig");
const Adminmodel=require("./models/Admin");
const cors=require("cors");
const authRoutes = require("./routes/authroutes");
const multerRoutes = require("./routes/multerroutes");
const templatesRoutes=require("./routes/templateroutes");
const FileModel=require("./models/file");
const path = require("path");

const app=express();
app.use(
  cors({
    origin: "http://localhost:5173", // or put your frontend domain here
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    
  })
);
app.use(express.json());
app.use(( req, res, next) => {
  console.error("🔥 ",req.method,req.url);
  
  next();
});
dbconnect();
const init = async () => {
  try {
    const existingAdmin = await Adminmodel.findOne({ email: "admin@example.com" });

    if (!existingAdmin) {
      const admin = new Adminmodel({
      
        email: "admin@example.com",
        password: "admin123",
      });
      await admin.save();
      console.log("Default admin created.");
    } else {
      console.log("Admin already exists.");
    }
  } catch (error) {
    console.error("Error in init function:", error.message);
  }
};


init();


// api
app.use("/api/auth",authRoutes);
app.use("/api/multer",multerRoutes);
app.use("/api",templatesRoutes);
app.use("/uploads", express.static("uploads")); 

app.listen(8080,()=>{
    console.log("server is running on port 8080");
   
})     