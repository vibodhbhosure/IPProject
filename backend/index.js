const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ message: "Hello World!" });
});

app.post("/run", (req, res) => {
  const { language = "cpp", code } = req.body;

  return res.json({ language: language, code: code });
});

app.listen(5000 || process.env.PORT, () =>
  console.log("Server Started at port 5000")
);
