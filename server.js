const express=require("express");
const dbconnect = require("./services/Dbconfig");
const Adminmodel=require("./models/Admin");
const cors=require("cors");
const authRoutes = require("./routes/authroutes");
const multerRoutes = require("./routes/multerroutes");
const FileModel=require("./models/file");
const path = require("path");

const app=express();
app.use(cors());
app.use(express.json());
app.use((req,res,next)=>{
   
      console.log(req.method,req.url);
        next();
})
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
app.use("/uploads", express.static("uploads")); 

app.get('/api/multer/file/:id', async (req, res) => {
  const file = await FileModel.findById(req.params.id);
  if (!file) return res.status(404).send('File not found');

  const filePath = path.resolve(__dirname, file.path); // safer
  res.sendFile(filePath);
});



app.listen(8080,()=>{
    console.log("server is running on port 8080");
   
})     