const file = require("../models/file");

const uploadFile = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    const fileData = new file({
      originalName: req.file.originalname,
      storedName: req.file.filename,
      mimeType: req.file.mimetype,
      size: req.file.size,
      path: req.file.path,
    });

    const savedFile = await fileData.save();

    res.status(201).json({
      message: "File uploaded and saved to DB",
      file: savedFile,
    });
  } catch (error) {
    console.error("Upload error:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};


const getAllFiles = async (req, res) => {
  try {
    const files = await file.find().sort({ uploadedAt: -1 }); // latest first
    res.status(200).json({ files });
  } catch (error) {
    console.error("Fetch error:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
const deletefile=async(req,res)=>{
  const id=req.body.id;
  try {
    const dfile=await file.findByIdAndDelete(id);
    if(dfile){
      res.status(200).json({message:"file deleted successfully"});
    }else{
      res.status(404).json({message:"file not found"});
    }
  } catch (error) {
    res.status(500).json({message:"internal server error"});
  }
}

module.exports = { uploadFile,getAllFiles,deletefile };
