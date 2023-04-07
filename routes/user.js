const express = require("express");
const { register, getAllUsers, updateUsers, deleteUser, userDetails } = require("../controllers/user");
const router = express.Router();


router.route("/register").post(register);
router.route("/users").get(getAllUsers);
router.route("/user/:id").put(updateUsers).delete(deleteUser).get(userDetails)

module.exports = router;
