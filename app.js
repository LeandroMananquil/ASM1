// Leandro Mananquil | 301346791 | 01-28-2024
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8000;

const indexRouter = require('./routes/index')
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', indexRouter);
// index page

app.listen(PORT);
console.log(`Server is listening on port ${PORT}`);
