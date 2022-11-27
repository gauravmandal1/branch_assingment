const express = require("express");
const {
  accessChat,
  fetchChats,
  createGroupChat,
  
  addToGroup,
  
} = require("../controllers/chatControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChats);
router.route("/group").post(protect, createGroupChat);
router.route("/groupadd").put(protect, addToGroup);

module.exports = router;
