const express = require("express");
const router = express.Router();
const {uploadSingle,uploadCovers} = require("../services/multer");
const filecontroller = require("../controllers/filecontroller");
router.post("/upload", uploadSingle, filecontroller.uploadFile);
router.get("/file",  filecontroller.getAllFiles);
router.get("/:id", filecontroller.deletefile);
router.post("/cover",uploadCovers,filecontroller.uploadCovers);

module.exports = router;
  