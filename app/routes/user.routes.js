const express = require("express");
const router = express.Router();

const {
  filterLivros,
  getLivros,
  search,
} = require("../controllers/user.controller");

router.route("/").get(getLivros);
router.route("/filtro").get(filterLivros);
router.route("/search").get(search);

module.exports = router;
