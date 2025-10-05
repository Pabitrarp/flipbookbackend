const express = require("express");

const filecontroller=require("../controllers/filecontroller");
const router= express.Router();

router.get("/templates",filecontroller.getAllTemplates);

module.exports=router;