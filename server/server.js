import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js";

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

// Middleware for handling CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/", (req, res) => {
  res.send("Api is smashing......");
});

// Route for getting a single product by ID
app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  const product = products.find((p) => p._id === productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// Route for getting all products
app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});







// previous codebase
// import express from "express";
// import dotenv from "dotenv";
// import products from "./data/products.js";

// const port = process.env.PORT || 5000;
// const app = express();

// app.get("/", (req, res) => {
//   res.send("Api is smashing......");
// });

// app.get("/api/products/:id", (req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.setHeader("Access-Control-Allow-Methods", "GET");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");

//   const product = products.find((p) => p._id === req.params.id);
//   res.json(product);
// });

// app.get("/api/products", (req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.setHeader("Access-Control-Allow-Methods", "GET");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   res.json(products);
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
