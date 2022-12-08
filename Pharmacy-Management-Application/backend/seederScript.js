require("dotenv").config();

const productData = require("./data/products");
const connectDB = require("./config/db");
const Product = require("./models/Product");
const multer = require("multer");
const upload = multer({dest:"uploads/"})

const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

connectDB();

// middlewares
app.use(express.json());
app.use(cors());



const importData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(productData);
    console.log("Data Import Success");

    // userAuth();

    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importData();

// const userAuth =  (app) =>{
//    app.use("/api/users", userRoutes);
//    app.use("/api/auth", authRoutes);

//   const port = process.env.PORT || 8080;
//   app.listen(port, console.log(`Listening on port ${port}...`));

// }
