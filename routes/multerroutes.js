const express = require("express");
const router = express.Router();
const uploadSingle = require("../services/multer");
const fileController = require("../controllers/filecontroller");
router.post("/upload", uploadSingle, fileController.uploadFile);
router.get("/file",  fileController.getAllFiles);
router.delete("/delete/:id", fileController.deletefile);
module.exports = router;
  