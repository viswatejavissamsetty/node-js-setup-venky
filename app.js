const express = require("express");

const users = require("./routes/users");
const products = require("./routes/products");
const requestLogger = require("./utils/request-logger");
const connection = require("./connections/dbConnection");

const app = express();

app.use(express.json());

app.use(requestLogger);

app.use("/users", users);
app.use("/products", products);

app.all("*", (req, res) => {
  res.status(404);
  res.send(`
    <h1>Page not found</h1>
    <span>${req.originalUrl}</span>
  `);
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
