const express = require("express");
const { generateFile } = require("./generateFile");
const bodyParser = require("body-parser");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ message: "Hello World!" });
});

app.post("/run", async (req, res) => {
  const { language = "cpp", code } = req.body;
  if (code === undefined) {
    res.status(400).json({ success: false, message: "Code is required!" });
  }
  const filePath = await generateFile(language, code);
  return res.status(200).json({ success: true, filePath });
});

app.listen(5000 || process.env.PORT, () =>
  console.log("Server Started at port 5000")
);
