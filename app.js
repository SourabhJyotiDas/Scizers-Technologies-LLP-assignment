const express = require("express");
const app = express();
const cors = require('cors');
const path = require("path")

require("dotenv").config({path:"config/config.env"})

// Using Middlewares
app.use(cors())
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.static(path.join(__dirname, "client", 'build')))    // deploy only


app.get('/', async (req, res) => {
   res.sendFile(path.join(__dirname,'client', 'build', 'index.html'))
});

// importing Routes
const user = require("./routes/user")

// usign Routes
app.use("/api/v1",user)


module.exports = app;