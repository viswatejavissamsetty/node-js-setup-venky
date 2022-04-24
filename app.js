const express = require("express");

const app = express();

app.use(express.json());

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

app.get("/users", (req, res) => {
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

app.post("/users", (req, res) => {
  users.push(req.body);
  res.send("Data added successfully");
});

app.patch("/users/:name", (req, res) => {
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

app.delete("/users/:name", (req, res) => {
  const name = req.params.name;
  users = users.filter((user) => {
    return user.name !== name;
  });
  res.send(`User - ${name} deleted successfully`);
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
