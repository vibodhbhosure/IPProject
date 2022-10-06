const express = require("express");
const { executeCpp } = require("./executeCPP");


const { generateFile } = require("./generateFile");



const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/run", async (req, res) => {
  const { language = "cpp", code } = req.body;

  console.log(language, "Length:", code.length);

  if (code === undefined) {
    return res.status(400).json({ success: false, error: "Empty code body!" });
  }
  // need to generate a c++ file with content from the request
  const filepath = await generateFile(language, code);
  const output = await executeCpp(filepath);
  res.status(201).json({ filepath, output });
});


app.listen(5000, () => {
  console.log(`Listening on port 5000!`);
});