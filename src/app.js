const express = require("express");
const app = express();
const path = require("path");
const twig = require("twig");
const cors = require("cors");
//Routes
const fileRoutes = require("./routes/files.routes");
const annuairesRoutes = require("./routes/annuaires.routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//static fields
app.use(express.static("client/build"));
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use("/api", fileRoutes);
app.use("/api", annuairesRoutes);

//Api Endpoint
module.exports = app;
