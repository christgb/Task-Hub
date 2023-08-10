import { error } from "console";
import express from "express";
import mongoose from "mongoose";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;

// Ruta
app.get("/", (req, res) => {
  res.send("Estoy probando putos");
});

// Conexion mongoDB
mongoose
  .connect(process.env.MONGODB_UR || "MongoDB")
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
