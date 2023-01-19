const { response } = require("express");
const express = require("express");
const nunjucks = require("nunjucks");

const app = express();

app.use(express.static("public"));

//habilitar o uso do req.body
app.use(express.urlencoded({ extended: true }));

nunjucks.configure("src/views", {
  express: app,
  noCache: true,
});

app.get("/", (req, res) => {
  res.render("index.html");
  // res.json({ message: 'ok' });
});

const PORT = 3000;
app.listen(PORT, () =>
  console.log("🔥 App running on host: http://localhost:3000 🔥")
);
