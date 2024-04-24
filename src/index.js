const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const PORT = 8000;

// Static Path
const StaticPath = path.join(__dirname, "../public");
const partialsPath = path.join(__dirname, "../partials");

// Paths setting
app.use(express.static(StaticPath));
app.set("view engine", "hbs");
hbs.registerPartials(partialsPath);

// Routing
app.get("/", (req, res) => {
    res.render("index");
});
app.get("/weather", (req, res) => {
    res.render("weather");
});
app.get("/about", (req, res) => {
    res.render("about");
});
app.get("*", (req, res) => {
    res.render("404");
});

app.listen(PORT, () => {
    console.log(`Listening to the port ${PORT}`)
})