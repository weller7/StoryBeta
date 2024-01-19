const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/comments");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now

router.post("/createComment/:id", commentsController.createComment);

//router.put("/likePost/:id", commetsController.likeComment);


module.exports = router;