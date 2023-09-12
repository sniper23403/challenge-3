// index.js



/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");




/**
 * App Variables
 */

const app = express();
const cors = require("cors");
const port = process.env.PORT || "8000";


/**
 *  App Configuration
 */

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());
app.express(express.json());
app.use(express.urlencoded({extended: false}));

/**
 * Routes Definitions
 */

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.get("/user", (req, res) => {
  res.render("user", { title: "Profile", userProfile: { nickname: "Green Bit G02" } });
});

app.get("/todolist", (req, res) => {
  res.render("todolist", { title: "To Do List"});
});
/**
 * Server Activation
 */
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});

