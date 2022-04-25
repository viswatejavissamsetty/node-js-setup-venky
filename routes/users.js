const express = require("express");

const router = express.Router();

let users = [
  {
    name: "viswa",
    age: 12,
    marks: [12, 12, 13],
  },
  {
    name: "venky",
    age: 22,
  },
  {
    name: "vinay",
    age: 22,
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

  return res.json(users);
});

router.post("/", (req, res) => {
  users.push(req.body);
  res.send("Data added successfully");
});

router.patch("/:name", (req, res) => {
  const name = req.params.name;
  const age = req.body.age;

  users = users.map((user) => {
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
  users = users.filter((user) => {
    return user.name !== name;
  });
  res.send(`User - ${name} deleted successfully`);
});

module.exports = router;
