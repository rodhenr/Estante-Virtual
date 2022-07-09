const express = require("express");
const router = express.Router();

const { getLivros } = require("../controllers/user.controller");

router.route("/").get(getLivros);

module.exports = router;
