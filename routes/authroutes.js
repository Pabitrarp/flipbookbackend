const authcontroller=require("../controllers/auth");
const express = require("express");
const router = express.Router();

router.post("/signin", authcontroller.signin);
module.exports = router;