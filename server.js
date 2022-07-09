const express = require("express");
const cors = require("cors");
require("dotenv").config();
const userRoutes = require("./app/routes/user.routes");
const port = process.env.PORT || 8080;

const app = express();

app.use(cors({ credentials: true, origin: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(userRoutes);

app.listen(port, () => {
  console.log(`Server iniciado na porta ${port}`);
});

module.exports = app;
