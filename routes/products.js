const express = require("express");
const productsModel = require("../models/products");
const { productsService } = require("../models/products");

const router = express.Router();

let products = [
  {
    name: "samsung j6",
    price: 12000,
    discount: 10,
  },
  {
    name: "samsung j7",
    price: 15000,
    discount: 15,
  },
  {
    name: "samsung j8",
    price: 20000,
    discount: 20,
  },
];

// get -
// post -
// patch / put -
// delete -

router.get("/", (req, res) => {
  //   console.log(req.headers);
  //   if (req.headers.method === "neglect") {
  //     return res.json("Neglected by user");
  //   } else if (req.headers.method === "accept") {
  //     return res.json(users);
  //   } else {
  //     return res.sendStatus(404);
  //   }

  return res.json(products);
});

router.post("/", async (req, res) => {
  const data = await productsModel.addProduct(req.body);
  return res.json(data);
});

router.patch("/:name", (req, res) => {
  const name = req.params.name;
  const age = req.body.age;

  products = products.map((user) => {
    if (user.name === name) {
      return {
        name,
        age,
      };
    } else {
      return user;
    }
  });

  res.send("User updated successfully");
});

router.delete("/:name", (req, res) => {
  const name = req.params.name;
  products = products.filter((user) => {
    return user.name !== name;
  });
  res.send(`User - ${name} deleted successfully`);
});

router.all("*", (req, res) => {
  res.status(404);
  res.send("Invalid Page or improper route");
});

module.exports = router;
