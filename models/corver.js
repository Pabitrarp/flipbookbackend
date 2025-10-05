const mongoose =require ("mongoose"); 

const coverSchema = new mongoose.Schema({
  startCover: { type: String, required: true }, // file path
  endCover: { type: String, required: true },   // file path
  uploadedAt: { type: Date, default: Date.now }
});

module.exports=mongoose.model("Covers",coverSchema);